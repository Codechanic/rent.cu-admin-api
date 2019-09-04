<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HotelSupplement
 *
 * @ORM\Table(name="hotel_supplement", indexes={@ORM\Index(name="IDX_748E9924966C2F62", columns={"chain_id"}), @ORM\Index(name="IDX_748E99243243BB18", columns={"hotel_id"})})
 * @ORM\Entity
 */
class HotelSupplement
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
     * @var \DateTime
     *
     * @ORM\Column(name="start", type="date", nullable=false)
     */
    private $start;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="end", type="date", nullable=false)
     */
    private $end;

    /**
     * @var float
     *
     * @ORM\Column(name="value", type="float", precision=10, scale=0, nullable=false)
     */
    private $value;

    /**
     * @var \Hotel
     *
     * @ORM\ManyToOne(targetEntity="Hotel")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="hotel_id", referencedColumnName="id")
     * })
     */
    private $hotel;

    /**
     * @var \HotelChain
     *
     * @ORM\ManyToOne(targetEntity="HotelChain")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="chain_id", referencedColumnName="id")
     * })
     */
    private $chain;


}
