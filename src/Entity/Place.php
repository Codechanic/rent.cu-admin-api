<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Place
 *
 * @ORM\Table(name="place", indexes={@ORM\Index(name="IDX_741D53CDAE6F181C", columns={"municipality_id"})})
 * @ORM\Entity
 */
class Place
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
     * @ORM\Column(name="description", type="text", length=0, nullable=false)
     */
    private $description;

    /**
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;

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
     * @ORM\ManyToMany(targetEntity="Homestay", mappedBy="place")
     */
    private $homestay;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Hotel", mappedBy="place")
     */
    private $hotel;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->homestay = new \Doctrine\Common\Collections\ArrayCollection();
        $this->hotel = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
