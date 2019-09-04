<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * FlightChain
 *
 * @ORM\Table(name="flight_chain")
 * @ORM\Entity
 */
class FlightChain
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
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Season", inversedBy="flightchain")
     * @ORM\JoinTable(name="flight_chain_season",
     *   joinColumns={
     *     @ORM\JoinColumn(name="flightchain_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="season_id", referencedColumnName="id")
     *   }
     * )
     */
    private $season;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->season = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
