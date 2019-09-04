<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Rentaloffice
 *
 * @ORM\Table(name="rentaloffice", indexes={@ORM\Index(name="IDX_65820971DA6A219", columns={"place_id"}), @ORM\Index(name="IDX_65820971A7CF2329", columns={"rental_id"})})
 * @ORM\Entity
 */
class Rentaloffice
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
     * @ORM\Column(name="address", type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @var string|null
     *
     * @ORM\Column(name="phones", type="string", length=255, nullable=true)
     */
    private $phones;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="open", type="time", nullable=true)
     */
    private $open;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="close", type="time", nullable=true)
     */
    private $close;

    /**
     * @var \Rental
     *
     * @ORM\ManyToOne(targetEntity="Rental")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="rental_id", referencedColumnName="id")
     * })
     */
    private $rental;

    /**
     * @var \Rentalplace
     *
     * @ORM\ManyToOne(targetEntity="Rentalplace")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="place_id", referencedColumnName="id")
     * })
     */
    private $place;


}
