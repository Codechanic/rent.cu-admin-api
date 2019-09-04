<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Programroute
 *
 * @ORM\Table(name="programroute")
 * @ORM\Entity
 */
class Programroute
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
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;

    /**
     * @var string|null
     *
     * @ORM\Column(name="filepath", type="string", length=255, nullable=true)
     */
    private $filepath;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Season", inversedBy="programroute")
     * @ORM\JoinTable(name="programroute_season",
     *   joinColumns={
     *     @ORM\JoinColumn(name="programroute_id", referencedColumnName="id")
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
