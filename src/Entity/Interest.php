<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Interest
 *
 * @ORM\Table(name="interest", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_6C3E1A675E237E06", columns={"name"})})
 * @ORM\Entity
 */
class Interest
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
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Homestay", mappedBy="interest")
     */
    private $homestay;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Hotel", mappedBy="interest")
     */
    private $hotel;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->homestay = new \Doctrine\Common\Collections\ArrayCollection();
        $this->hotel = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
