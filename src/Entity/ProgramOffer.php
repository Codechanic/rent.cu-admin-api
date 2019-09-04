<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ProgramOffer
 *
 * @ORM\Table(name="program_offer", indexes={@ORM\Index(name="IDX_B7BFF4C83EB8070A", columns={"program_id"}), @ORM\Index(name="IDX_B7BFF4C8C3C6F69F", columns={"car_id"})})
 * @ORM\Entity
 */
class ProgramOffer
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
     * @var int
     *
     * @ORM\Column(name="roomcount", type="integer", nullable=false)
     */
    private $roomcount;

    /**
     * @var \Program
     *
     * @ORM\ManyToOne(targetEntity="Program")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="program_id", referencedColumnName="id")
     * })
     */
    private $program;

    /**
     * @var \Car
     *
     * @ORM\ManyToOne(targetEntity="Car")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="car_id", referencedColumnName="id")
     * })
     */
    private $car;


}
