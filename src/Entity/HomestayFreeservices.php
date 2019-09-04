<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HomestayFreeservices
 *
 * @ORM\Table(name="homestay_freeservices", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_F0A6CA7A5E237E06", columns={"name"})})
 * @ORM\Entity
 */
class HomestayFreeservices
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
     * @ORM\ManyToMany(targetEntity="Homestay", mappedBy="homestayfreeservice")
     */
    private $homestay;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->homestay = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
