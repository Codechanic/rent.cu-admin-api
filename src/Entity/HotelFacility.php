<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HotelFacility
 *
 * @ORM\Table(name="hotel_facility", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_523846C05E237E06", columns={"name"})})
 * @ORM\Entity
 */
class HotelFacility
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
