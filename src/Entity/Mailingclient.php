<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Mailingclient
 *
 * @ORM\Table(name="mailingclient")
 * @ORM\Entity
 */
class Mailingclient
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
     * @ORM\ManyToMany(targetEntity="Client", inversedBy="mailingclient")
     * @ORM\JoinTable(name="mailing_client",
     *   joinColumns={
     *     @ORM\JoinColumn(name="mailingclient_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="client_id", referencedColumnName="id")
     *   }
     * )
     */
    private $client;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->client = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
