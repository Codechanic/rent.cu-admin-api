<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Hotelroom
 *
 * @ORM\Table(name="hotelroom", indexes={@ORM\Index(name="IDX_477EFB1F7D31ADD1", columns={"roomtype_id"}), @ORM\Index(name="IDX_477EFB1F3243BB18", columns={"hotel_id"})})
 * @ORM\Entity
 */
class Hotelroom
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
     * @var int
     *
     * @ORM\Column(name="capacity", type="integer", nullable=false)
     */
    private $capacity;

    /**
     * @var int
     *
     * @ORM\Column(name="maxchild", type="integer", nullable=false)
     */
    private $maxchild;

    /**
     * @var int
     *
     * @ORM\Column(name="minadult", type="integer", nullable=false)
     */
    private $minadult;

    /**
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;

    /**
     * @var \Hotel
     *
     * @ORM\ManyToOne(targetEntity="Hotel")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     * })
     */
    private $hotel;

    /**
     * @var \HotelRoomtype
     *
     * @ORM\ManyToOne(targetEntity="HotelRoomtype")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="roomtype_id", referencedColumnName="id")
     * })
     */
    private $roomtype;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Hotelroomfacility", inversedBy="hotelroom")
     * @ORM\JoinTable(name="hotelroom_hotelroomfacility",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotelroom_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="hotelroomfacility_id", referencedColumnName="id")
     *   }
     * )
     */
    private $hotelroomfacility;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->hotelroomfacility = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
