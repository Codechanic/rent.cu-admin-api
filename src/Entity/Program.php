<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Program
 *
 * @ORM\Table(name="program")
 * @ORM\Entity
 */
class Program
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
     * @ORM\Column(name="description", type="text", length=0, nullable=true)
     */
    private $description;

    /**
     * @var int
     *
     * @ORM\Column(name="nightsmin", type="integer", nullable=false)
     */
    private $nightsmin;

    /**
     * @var string|null
     *
     * @ORM\Column(name="filepath", type="string", length=255, nullable=true)
     */
    private $filepath;

    /**
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;

    /**
     * @var float|null
     *
     * @ORM\Column(name="confortsupplement", type="float", precision=10, scale=0, nullable=true)
     */
    private $confortsupplement;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Season", inversedBy="program")
     * @ORM\JoinTable(name="program_season",
     *   joinColumns={
     *     @ORM\JoinColumn(name="program_id", referencedColumnName="id")
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
        $this->season = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
