<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HomestayFacility
 *
 * @ORM\Table(name="homestay_facility", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_3E1B5D2C5E237E06", columns={"name"})})
 * @ORM\Entity
 */
class HomestayFacility
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


}
