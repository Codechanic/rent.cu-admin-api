<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HotelChain
 *
 * @ORM\Table(name="hotel_chain", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_52D6D60E5E237E06", columns={"name"})})
 * @ORM\Entity
 */
class HotelChain
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
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;

    /**
     * @var float|null
     *
     * @ORM\Column(name="childdiscount", type="float", precision=10, scale=0, nullable=true)
     */
    private $childdiscount;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Season", inversedBy="hotelchain")
     * @ORM\JoinTable(name="hotel_chain_seasons",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotelchain_id", referencedColumnName="id")
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
