<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Carcategory
 *
 * @ORM\Table(name="carcategory", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_21AF03605E237E06", columns={"name"})})
 * @ORM\Entity
 */
class Carcategory
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
     * @ORM\ManyToMany(targetEntity="Rental", mappedBy="carcategory")
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
