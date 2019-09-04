<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HotelPrice
 *
 * @ORM\Table(name="hotel_price", indexes={@ORM\Index(name="IDX_291CEC1D3243BB18", columns={"hotel_id"}), @ORM\Index(name="IDX_291CEC1D31CE4577", columns={"hotelroom_id"}), @ORM\Index(name="IDX_291CEC1D8D40377F", columns={"hotelplan_id"}), @ORM\Index(name="IDX_291CEC1D4EC001D1", columns={"season_id"})})
 * @ORM\Entity
 */
class HotelPrice
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
     * @var float
     *
     * @ORM\Column(name="price", type="float", precision=10, scale=0, nullable=false)
     */
    private $price;

    /**
     * @var string
     *
     * @ORM\Column(name="code", type="string", length=255, nullable=false)
     */
    private $code;

    /**
     * @var \Hotelroom
     *
     * @ORM\ManyToOne(targetEntity="Hotelroom")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="hotelroom_id", referencedColumnName="id")
     * })
     */
    private $hotelroom;

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
     * @var \Season
     *
     * @ORM\ManyToOne(targetEntity="Season")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="season_id", referencedColumnName="id")
     * })
     */
    private $season;

    /**
     * @var \HotelPlan
     *
     * @ORM\ManyToOne(targetEntity="HotelPlan")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="hotelplan_id", referencedColumnName="id")
     * })
     */
    private $hotelplan;


}
