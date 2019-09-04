<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Mailinghomestay
 *
 * @ORM\Table(name="mailinghomestay")
 * @ORM\Entity
 */
class Mailinghomestay
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
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

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
     * @ORM\ManyToMany(targetEntity="Homestay", inversedBy="mailinghomestay")
     * @ORM\JoinTable(name="mailing_homestays",
     *   joinColumns={
     *     @ORM\JoinColumn(name="mailinghomestay_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="homestay_id", referencedColumnName="id")
     *   }
     * )
     */
    private $homestay;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->homestay = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
