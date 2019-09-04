<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Mailing
 *
 * @ORM\Table(name="mailing")
 * @ORM\Entity
 */
class Mailing
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255, nullable=false)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="body", type="text", length=0, nullable=false)
     */
    private $body;

    /**
     * @var bool
     *
     * @ORM\Column(name="sended", type="boolean", nullable=false)
     */
    private $sended;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Contact", inversedBy="mailing")
     * @ORM\JoinTable(name="mailing_contact",
     *   joinColumns={
     *     @ORM\JoinColumn(name="mailing_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="contact_id", referencedColumnName="id")
     *   }
     * )
     */
    private $contact;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->contact = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
