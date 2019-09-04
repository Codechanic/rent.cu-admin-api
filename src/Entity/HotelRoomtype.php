<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HotelRoomtype
 *
 * @ORM\Table(name="hotel_roomtype")
 * @ORM\Entity
 */
class HotelRoomtype
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
     * @ORM\Column(name="type", type="string", length=255, nullable=false)
     */
    private $type;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Hotel", mappedBy="hotelroomtype")
     */
    private $hotel;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->hotel = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
