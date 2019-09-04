<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HomestayNotoffered
 *
 * @ORM\Table(name="homestay_notoffered", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_36E7AD625E237E06", columns={"name"})})
 * @ORM\Entity
 */
class HomestayNotoffered
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
     * @ORM\ManyToMany(targetEntity="Homestay", mappedBy="homestaynotoffered")
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
