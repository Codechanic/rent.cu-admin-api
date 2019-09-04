<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HotelNotoffered
 *
 * @ORM\Table(name="hotel_notoffered", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_4E49B44D5E237E06", columns={"name"})})
 * @ORM\Entity
 */
class HotelNotoffered
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
     * @ORM\ManyToMany(targetEntity="Hotel", mappedBy="hotelnotoffered")
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
