<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Rentalplace
 *
 * @ORM\Table(name="rentalplace", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_A6747C165E237E06", columns={"name"})})
 * @ORM\Entity
 */
class Rentalplace
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
     * @var bool
     *
     * @ORM\Column(name="airport", type="boolean", nullable=false)
     */
    private $airport;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Rental", mappedBy="rentalplace")
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
