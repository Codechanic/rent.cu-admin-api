<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HotelPlan
 *
 * @ORM\Table(name="hotel_plan")
 * @ORM\Entity
 */
class HotelPlan
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
     * @ORM\Column(name="description", type="string", length=255, nullable=false)
     */
    private $description;

    /**
     * @var bool
     *
     * @ORM\Column(name="private", type="boolean", nullable=false)
     */
    private $private;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Hotel", inversedBy="hotelplan")
     * @ORM\JoinTable(name="hotels_plans",
     *   joinColumns={
     *     @ORM\JoinColumn(name="hotelplan_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     *   }
     * )
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
