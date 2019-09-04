<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Reservationitems
 *
 * @ORM\Table(name="reservationitems", indexes={@ORM\Index(name="IDX_AA02543EB83297E7", columns={"reservation_id"})})
 * @ORM\Entity
 */
class Reservationitems
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
     * @ORM\Column(name="type", type="string", length=255, nullable=false)
     */
    private $type;

    /**
     * @var string
     *
     * @ORM\Column(name="code", type="string", length=255, nullable=false)
     */
    private $code;

    /**
     * @var float
     *
     * @ORM\Column(name="price", type="float", precision=10, scale=0, nullable=false)
     */
    private $price;

    /**
     * @var int
     *
     * @ORM\Column(name="status", type="integer", nullable=false)
     */
    private $status;

    /**
     * @var string
     *
     * @ORM\Column(name="html", type="text", length=0, nullable=false)
     */
    private $html;

    /**
     * @var string
     *
     * @ORM\Column(name="price_detail", type="text", length=0, nullable=false)
     */
    private $priceDetail;

    /**
     * @var \Reservation
     *
     * @ORM\ManyToOne(targetEntity="Reservation")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="reservation_id", referencedColumnName="id")
     * })
     */
    private $reservation;


}
