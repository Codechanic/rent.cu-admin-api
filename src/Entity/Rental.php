<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Rental
 *
 * @ORM\Table(name="rental", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_1619C27D5E237E06", columns={"name"})})
 * @ORM\Entity
 */
class Rental
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
     * @var int|null
     *
     * @ORM\Column(name="extradayhours", type="integer", nullable=true)
     */
    private $extradayhours;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Car", mappedBy="rental")
     */
    private $car;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Carcategory", inversedBy="rental")
     * @ORM\JoinTable(name="rental_category",
     *   joinColumns={
     *     @ORM\JoinColumn(name="rental_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="carcategory_id", referencedColumnName="id")
     *   }
     * )
     */
    private $carcategory;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Rentalplace", inversedBy="rental")
     * @ORM\JoinTable(name="rental_rentalplace",
     *   joinColumns={
     *     @ORM\JoinColumn(name="rental_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="rentalplace_id", referencedColumnName="id")
     *   }
     * )
     */
    private $rentalplace;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Season", inversedBy="rental")
     * @ORM\JoinTable(name="rental_season",
     *   joinColumns={
     *     @ORM\JoinColumn(name="rental_id", referencedColumnName="id")
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
        $this->car = new \Doctrine\Common\Collections\ArrayCollection();
        $this->carcategory = new \Doctrine\Common\Collections\ArrayCollection();
        $this->rentalplace = new \Doctrine\Common\Collections\ArrayCollection();
        $this->season = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
