<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HomestayChain
 *
 * @ORM\Table(name="homestay_chain")
 * @ORM\Entity
 */
class HomestayChain
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
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Season", inversedBy="homestaychain")
     * @ORM\JoinTable(name="homestay_chain_season",
     *   joinColumns={
     *     @ORM\JoinColumn(name="homestaychain_id", referencedColumnName="id")
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
