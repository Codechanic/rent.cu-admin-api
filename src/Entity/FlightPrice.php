<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * FlightPrice
 *
 * @ORM\Table(name="flight_price", indexes={@ORM\Index(name="IDX_199FE87F91F478C5", columns={"flight_id"}), @ORM\Index(name="IDX_199FE87F4EC001D1", columns={"season_id"})})
 * @ORM\Entity
 */
class FlightPrice
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
     * @var \Season
     *
     * @ORM\ManyToOne(targetEntity="Season")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="season_id", referencedColumnName="id")
     * })
     */
    private $season;

    /**
     * @var \Flight
     *
     * @ORM\ManyToOne(targetEntity="Flight")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="flight_id", referencedColumnName="id")
     * })
     */
    private $flight;


}
