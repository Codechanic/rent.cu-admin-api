<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HotelFreeservices
 *
 * @ORM\Table(name="hotel_freeservices", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_86D122795E237E06", columns={"name"})})
 * @ORM\Entity
 */
class HotelFreeservices
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
     * @ORM\ManyToMany(targetEntity="Hotel", mappedBy="hotelfreeservice")
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
