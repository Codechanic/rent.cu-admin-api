<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Homestay
 *
 * @ORM\Table(name="homestay", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_8127E052E7927C74", columns={"email"}), @ORM\UniqueConstraint(name="UNIQ_8127E0525E237E06", columns={"name"})}, indexes={@ORM\Index(name="IDX_8127E05264D218E", columns={"location_id"}), @ORM\Index(name="IDX_8127E052966C2F62", columns={"chain_id"}), @ORM\Index(name="IDX_8127E0528BF177F8", columns={"acommodation_id"}), @ORM\Index(name="IDX_8127E052AE6F181C", columns={"municipality_id"})})
 * @ORM\Entity
 */
class Homestay
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
     * @var int
     *
     * @ORM\Column(name="rooms", type="integer", nullable=false)
     */
    private $rooms;

    /**
     * @var bool
     *
     * @ORM\Column(name="promo", type="boolean", nullable=false)
     */
    private $promo;

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
     * @var string
     *
     * @ORM\Column(name="owner", type="string", length=255, nullable=false)
     */
    private $owner;

    /**
     * @var float
     *
     * @ORM\Column(name="comision", type="float", precision=10, scale=0, nullable=false)
     */
    private $comision;

    /**
     * @var float|null
     *
     * @ORM\Column(name="breakfastprice", type="float", precision=10, scale=0, nullable=true)
     */
    private $breakfastprice;

    /**
     * @var float|null
     *
     * @ORM\Column(name="bedprice", type="float", precision=10, scale=0, nullable=true)
     */
    private $bedprice;

    /**
     * @var float|null
     *
     * @ORM\Column(name="bedchildprice", type="float", precision=10, scale=0, nullable=true)
     */
    private $bedchildprice;

    /**
     * @var string|null
     *
     * @ORM\Column(name="account", type="string", length=255, nullable=true)
     */
    private $account;

    /**
     * @var bool
     *
     * @ORM\Column(name="showcontact", type="boolean", nullable=false)
     */
    private $showcontact;

    /**
     * @var int
     *
     * @ORM\Column(name="rank", type="integer", nullable=false)
     */
    private $rank;

    /**
     * @var bool
     *
     * @ORM\Column(name="show_home", type="boolean", nullable=false)
     */
    private $showHome;

    /**
     * @var string
     *
     * @ORM\Column(name="note", type="text", length=0, nullable=false)
     */
    private $note;

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
     * @var \Acommodationtype
     *
     * @ORM\ManyToOne(targetEntity="Acommodationtype")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="acommodation_id", referencedColumnName="id")
     * })
     */
    private $acommodation;

    /**
     * @var \HomestayChain
     *
     * @ORM\ManyToOne(targetEntity="HomestayChain")
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
     * @ORM\ManyToMany(targetEntity="Season", inversedBy="homestay")
     * @ORM\JoinTable(name="homestay_season",
     *   joinColumns={
     *     @ORM\JoinColumn(name="homestay_id", referencedColumnName="id")
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
     * @ORM\ManyToMany(targetEntity="HomestayExtracost", inversedBy="homestay")
     * @ORM\JoinTable(name="homestays_extracosts",
     *   joinColumns={
     *     @ORM\JoinColumn(name="homestay_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="homestayextracost_id", referencedColumnName="id")
     *   }
     * )
     */
    private $homestayextracost;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="HomestayFreeservices", inversedBy="homestay")
     * @ORM\JoinTable(name="homestays_freeservices",
     *   joinColumns={
     *     @ORM\JoinColumn(name="homestay_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="homestayfreeservice_id", referencedColumnName="id")
     *   }
     * )
     */
    private $homestayfreeservice;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Interest", inversedBy="homestay")
     * @ORM\JoinTable(name="homestays_interests",
     *   joinColumns={
     *     @ORM\JoinColumn(name="homestay_id", referencedColumnName="id")
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
     * @ORM\ManyToMany(targetEntity="HomestayNotoffered", inversedBy="homestay")
     * @ORM\JoinTable(name="homestays_notoffereds",
     *   joinColumns={
     *     @ORM\JoinColumn(name="homestay_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="homestaynotoffered_id", referencedColumnName="id")
     *   }
     * )
     */
    private $homestaynotoffered;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Place", inversedBy="homestay")
     * @ORM\JoinTable(name="homestays_places",
     *   joinColumns={
     *     @ORM\JoinColumn(name="homestay_id", referencedColumnName="id")
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
     * @ORM\ManyToMany(targetEntity="Mailinghomestay", mappedBy="homestay")
     */
    private $mailinghomestay;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->season = new \Doctrine\Common\Collections\ArrayCollection();
        $this->homestayextracost = new \Doctrine\Common\Collections\ArrayCollection();
        $this->homestayfreeservice = new \Doctrine\Common\Collections\ArrayCollection();
        $this->interest = new \Doctrine\Common\Collections\ArrayCollection();
        $this->homestaynotoffered = new \Doctrine\Common\Collections\ArrayCollection();
        $this->place = new \Doctrine\Common\Collections\ArrayCollection();
        $this->mailinghomestay = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Homestay
     */
    public function setId(int $id): Homestay
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getSlug(): string
    {
        return $this->slug;
    }

    /**
     * @param string $slug
     * @return Homestay
     */
    public function setSlug(string $slug): Homestay
    {
        $this->slug = $slug;
        return $this;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Homestay
     */
    public function setName(string $name): Homestay
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getPath(): ?string
    {
        return $this->path;
    }

    /**
     * @param string|null $path
     * @return Homestay
     */
    public function setPath(?string $path): Homestay
    {
        $this->path = $path;
        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     * @return Homestay
     */
    public function setDescription(string $description): Homestay
    {
        $this->description = $description;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getAddress(): ?string
    {
        return $this->address;
    }

    /**
     * @param string|null $address
     * @return Homestay
     */
    public function setAddress(?string $address): Homestay
    {
        $this->address = $address;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getPhones(): ?string
    {
        return $this->phones;
    }

    /**
     * @param string|null $phones
     * @return Homestay
     */
    public function setPhones(?string $phones): Homestay
    {
        $this->phones = $phones;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string|null $email
     * @return Homestay
     */
    public function setEmail(?string $email): Homestay
    {
        $this->email = $email;
        return $this;
    }

    /**
     * @return int
     */
    public function getRooms(): int
    {
        return $this->rooms;
    }

    /**
     * @param int $rooms
     * @return Homestay
     */
    public function setRooms(int $rooms): Homestay
    {
        $this->rooms = $rooms;
        return $this;
    }

    /**
     * @return float|null
     */
    public function getLatitude(): ?float
    {
        return $this->latitude;
    }

    /**
     * @param float|null $latitude
     * @return Homestay
     */
    public function setLatitude(?float $latitude): Homestay
    {
        $this->latitude = $latitude;
        return $this;
    }

    /**
     * @return float|null
     */
    public function getLongitude(): ?float
    {
        return $this->longitude;
    }

    /**
     * @param float|null $longitude
     * @return Homestay
     */
    public function setLongitude(?float $longitude): Homestay
    {
        $this->longitude = $longitude;
        return $this;
    }

    /**
     * @return bool
     */
    public function isEnabled(): bool
    {
        return $this->enabled;
    }

    /**
     * @param bool $enabled
     * @return Homestay
     */
    public function setEnabled(bool $enabled): Homestay
    {
        $this->enabled = $enabled;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getMetaTitle(): ?string
    {
        return $this->metaTitle;
    }

    /**
     * @param string|null $metaTitle
     * @return Homestay
     */
    public function setMetaTitle(?string $metaTitle): Homestay
    {
        $this->metaTitle = $metaTitle;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getMetaDescription(): ?string
    {
        return $this->metaDescription;
    }

    /**
     * @param string|null $metaDescription
     * @return Homestay
     */
    public function setMetaDescription(?string $metaDescription): Homestay
    {
        $this->metaDescription = $metaDescription;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getMetaKeywords(): ?string
    {
        return $this->metaKeywords;
    }

    /**
     * @param string|null $metaKeywords
     * @return Homestay
     */
    public function setMetaKeywords(?string $metaKeywords): Homestay
    {
        $this->metaKeywords = $metaKeywords;
        return $this;
    }

    /**
     * @return string
     */
    public function getOwner(): string
    {
        return $this->owner;
    }

    /**
     * @param string $owner
     * @return Homestay
     */
    public function setOwner(string $owner): Homestay
    {
        $this->owner = $owner;
        return $this;
    }

    /**
     * @return float
     */
    public function getComision(): float
    {
        return $this->comision;
    }

    /**
     * @param float $comision
     * @return Homestay
     */
    public function setComision(float $comision): Homestay
    {
        $this->comision = $comision;
        return $this;
    }

    /**
     * @return float|null
     */
    public function getBreakfastprice(): ?float
    {
        return $this->breakfastprice;
    }

    /**
     * @param float|null $breakfastprice
     * @return Homestay
     */
    public function setBreakfastprice(?float $breakfastprice): Homestay
    {
        $this->breakfastprice = $breakfastprice;
        return $this;
    }

    /**
     * @return float|null
     */
    public function getBedprice(): ?float
    {
        return $this->bedprice;
    }

    /**
     * @param float|null $bedprice
     * @return Homestay
     */
    public function setBedprice(?float $bedprice): Homestay
    {
        $this->bedprice = $bedprice;
        return $this;
    }

    /**
     * @return float|null
     */
    public function getBedchildprice(): ?float
    {
        return $this->bedchildprice;
    }

    /**
     * @param float|null $bedchildprice
     * @return Homestay
     */
    public function setBedchildprice(?float $bedchildprice): Homestay
    {
        $this->bedchildprice = $bedchildprice;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getAccount(): ?string
    {
        return $this->account;
    }

    /**
     * @param string|null $account
     * @return Homestay
     */
    public function setAccount(?string $account): Homestay
    {
        $this->account = $account;
        return $this;
    }

    /**
     * @return bool
     */
    public function isShowcontact(): bool
    {
        return $this->showcontact;
    }

    /**
     * @param bool $showcontact
     * @return Homestay
     */
    public function setShowcontact(bool $showcontact): Homestay
    {
        $this->showcontact = $showcontact;
        return $this;
    }

    /**
     * @return int
     */
    public function getRank(): int
    {
        return $this->rank;
    }

    /**
     * @param int $rank
     * @return Homestay
     */
    public function setRank(int $rank): Homestay
    {
        $this->rank = $rank;
        return $this;
    }

    /**
     * @return bool
     */
    public function isShowHome(): bool
    {
        return $this->showHome;
    }

    /**
     * @param bool $showHome
     * @return Homestay
     */
    public function setShowHome(bool $showHome): Homestay
    {
        $this->showHome = $showHome;
        return $this;
    }

    /**
     * @return string
     */
    public function getNote(): string
    {
        return $this->note;
    }

    /**
     * @param string $note
     * @return Homestay
     */
    public function setNote(string $note): Homestay
    {
        $this->note = $note;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getAcommodation()
    {
        return $this->acommodation;
    }

    /**
     * @param \Acommodationtype $acommodation
     * @return Homestay
     */
    public function setAcommodation(\Acommodationtype $acommodation): Homestay
    {
        $this->acommodation = $acommodation;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getMunicipality()
    {
        return $this->municipality;
    }

    /**
     * @param \Municipality $municipality
     * @return Homestay
     */
    public function setMunicipality(\Municipality $municipality): Homestay
    {
        $this->municipality = $municipality;
        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getInterest(): \Doctrine\Common\Collections\Collection
    {
        return $this->interest;
    }

    /**
     * @param \Doctrine\Common\Collections\Collection $interest
     * @return Homestay
     */
    public function setInterest(\Doctrine\Common\Collections\Collection $interest): Homestay
    {
        $this->interest = $interest;
        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPlace(): \Doctrine\Common\Collections\Collection
    {
        return $this->place;
    }

    /**
     * @param \Doctrine\Common\Collections\Collection $place
     * @return Homestay
     */
    public function setPlace(\Doctrine\Common\Collections\Collection $place): Homestay
    {
        $this->place = $place;
        return $this;
    }



}
