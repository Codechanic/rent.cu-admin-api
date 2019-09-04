<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Hotelroomfacility
 *
 * @ORM\Table(name="hotelroomfacility", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_84031FE5E237E06", columns={"name"})})
 * @ORM\Entity
 */
class Hotelroomfacility
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
     * @ORM\ManyToMany(targetEntity="Hotelroom", mappedBy="hotelroomfacility")
     */
    private $hotelroom;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->hotelroom = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
