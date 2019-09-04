<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Season
 *
 * @ORM\Table(name="season")
 * @ORM\Entity
 */
class Season
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
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="FlightChain", mappedBy="season")
     */
    private $flightchain;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="HomestayChain", mappedBy="season")
     */
    private $homestaychain;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Homestay", mappedBy="season")
     */
    private $homestay;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="HotelChain", mappedBy="season")
     */
    private $hotelchain;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Hotel", mappedBy="season")
     */
    private $hotel;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Program", mappedBy="season")
     */
    private $program;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Programdive", mappedBy="season")
     */
    private $programdive;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Programroute", mappedBy="season")
     */
    private $programroute;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Programtour", mappedBy="season")
     */
    private $programtour;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Rental", mappedBy="season")
     */
    private $rental;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->flightchain = new \Doctrine\Common\Collections\ArrayCollection();
        $this->homestaychain = new \Doctrine\Common\Collections\ArrayCollection();
        $this->homestay = new \Doctrine\Common\Collections\ArrayCollection();
        $this->hotelchain = new \Doctrine\Common\Collections\ArrayCollection();
        $this->hotel = new \Doctrine\Common\Collections\ArrayCollection();
        $this->program = new \Doctrine\Common\Collections\ArrayCollection();
        $this->programdive = new \Doctrine\Common\Collections\ArrayCollection();
        $this->programroute = new \Doctrine\Common\Collections\ArrayCollection();
        $this->programtour = new \Doctrine\Common\Collections\ArrayCollection();
        $this->rental = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
