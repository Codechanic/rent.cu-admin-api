<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Car
 *
 * @ORM\Table(name="car", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_773DE69D5E237E06", columns={"name"})}, indexes={@ORM\Index(name="IDX_773DE69D6316CAA9", columns={"carbrand_id"})})
 * @ORM\Entity
 */
class Car
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
     * @var int
     *
     * @ORM\Column(name="tank", type="integer", nullable=false)
     */
    private $tank;

    /**
     * @var int
     *
     * @ORM\Column(name="doors", type="integer", nullable=false)
     */
    private $doors;

    /**
     * @var int
     *
     * @ORM\Column(name="capacity", type="integer", nullable=false)
     */
    private $capacity;

    /**
     * @var bool
     *
     * @ORM\Column(name="transmition", type="boolean", nullable=false)
     */
    private $transmition;

    /**
     * @var bool
     *
     * @ORM\Column(name="airbag", type="boolean", nullable=false)
     */
    private $airbag;

    /**
     * @var bool
     *
     * @ORM\Column(name="km", type="boolean", nullable=false)
     */
    private $km;

    /**
     * @var string
     *
     * @ORM\Column(name="slug", type="string", length=255, nullable=false)
     */
    private $slug;

    /**
     * @var \Carbrand
     *
     * @ORM\ManyToOne(targetEntity="Carbrand")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="carbrand_id", referencedColumnName="id")
     * })
     */
    private $carbrand;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Rental", inversedBy="car")
     * @ORM\JoinTable(name="car_rental",
     *   joinColumns={
     *     @ORM\JoinColumn(name="car_id", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="rental_id", referencedColumnName="id")
     *   }
     * )
     */
    private $rental;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->rental = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
