<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Hotel
 *
 * @ORM\Table(name="hotel", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_3535ED9E7927C74", columns={"email"}), @ORM\UniqueConstraint(name="UNIQ_3535ED95E237E06", columns={"name"})}, indexes={@ORM\Index(name="IDX_3535ED964D218E", columns={"location_id"}), @ORM\Index(name="IDX_3535ED9966C2F62", columns={"chain_id"}), @ORM\Index(name="IDX_3535ED9AE6F181C", columns={"municipality_id"})})
 * @ORM\Entity
 */
class Hotel
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
     * @ORM\Column(name="slug", type="string", length=255, nullable=false)
     */
    private $slug;

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
     * @var int
     *
     * @ORM\Column(name="category", type="integer", nullable=false)
     */
    private $category;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=0, nullable=false)
     */
    private $description;

    /**
     * @var string|null
     *
     * @ORM\Column(name="address", type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @var string|null
     *
     * @ORM\Column(name="phones", type="string", length=255, nullable=true)
     */
    private $phones;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var float|null
     *
     * @ORM\Column(name="latitude", type="float", precision=10, scale=0, nullable=true)
     */
    private $latitude;

    /**
     * @var float|null
     *
     * @ORM\Column(name="longitude", type="float", precision=10, scale=0, nullable=true)
     */
    private $longitude;

    /**
     * @var bool
     *
     * @ORM\Column(name="promo", type="boolean", nullable=false)
     */
    private $promo;

    /**
     * @var bool
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=false)
     */
    private $enabled;

    /**
     * @var string|null
     *
     * @ORM\Column(name="meta_title", type="string", length=255, nullable=true)
     */
    private $metaTitle;

    /**
     * @var string|null
     *
     * @ORM\Column(name="meta_description", type="string", length=255, nullable=true)
     */
    private $metaDescription;

    /**
     * @var string|null
     *
     * @ORM\Column(name="meta_keywords", type="string", length=255, nullable=true)
     */
    private $metaKeywords;

    /**
     * @var float|null
     *
     * @ORM\Column(name="tpsup", type="float", precision=10, scale=0, nullable=true)
     */
    private $tpsup;

    /**
     * @var float|null
     *
     * @ORM\Column(name="hotelplus", type="float", precision=10, scale=0, nullable=true)
     */
    private $hotelplus;

    /**
     * @var float|null
     *
     * @ORM\Column(name="stars", type="float", precision=10, scale=0, nullable=true)
     */
    private $stars;

    /**
     * @var \Location
     *
     * @ORM\ManyToOne(targetEntity="Location")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="location_id", referencedColumnName="id")
     * })
     */
    private $location;

    /**
     * @var \HotelChain
     *
     * @ORM\ManyToOne(targetEntity="HotelChain")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="chain_id", referencedColumnName="id")
     * })
     */
    private $chain;

    /**
     * @var \Municipality
     *
     * @ORM\ManyToOne(targetEntity="Municipality")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="municipality_id", referencedColumnName="id")
     * })
     */
    private $municipality;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Season", inversedBy="hotel")
     * @ORM\JoinTable(name="hotel_season",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="season_id", referencedColumnName="id")
     *   }
     * )
     */
    private $season;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="HotelExtracost", inversedBy="hotel")
     * @ORM\JoinTable(name="hotels_extracosts",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="hotelextracost_id", referencedColumnName="id")
     *   }
     * )
     */
    private $hotelextracost;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="HotelFreeservices", inversedBy="hotel")
     * @ORM\JoinTable(name="hotels_freeservices",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="hotelfreeservice_id", referencedColumnName="id")
     *   }
     * )
     */
    private $hotelfreeservice;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Interest", inversedBy="hotel")
     * @ORM\JoinTable(name="hotels_interests",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="interest_id", referencedColumnName="id")
     *   }
     * )
     */
    private $interest;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="HotelNotoffered", inversedBy="hotel")
     * @ORM\JoinTable(name="hotels_notoffereds",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="hotelnotoffered_id", referencedColumnName="id")
     *   }
     * )
     */
    private $hotelnotoffered;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Place", inversedBy="hotel")
     * @ORM\JoinTable(name="hotels_places",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="place_id", referencedColumnName="id")
     *   }
     * )
     */
    private $place;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="HotelPlan", mappedBy="hotel")
     */
    private $hotelplan;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="HotelRoomtype", inversedBy="hotel")
     * @ORM\JoinTable(name="hotels_rooms",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="hotelroomtype_id", referencedColumnName="id")
     *   }
     * )
     */
    private $hotelroomtype;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->season = new \Doctrine\Common\Collections\ArrayCollection();
        $this->hotelextracost = new \Doctrine\Common\Collections\ArrayCollection();
        $this->hotelfreeservice = new \Doctrine\Common\Collections\ArrayCollection();
        $this->interest = new \Doctrine\Common\Collections\ArrayCollection();
        $this->hotelnotoffered = new \Doctrine\Common\Collections\ArrayCollection();
        $this->place = new \Doctrine\Common\Collections\ArrayCollection();
        $this->hotelplan = new \Doctrine\Common\Collections\ArrayCollection();
        $this->hotelroomtype = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
