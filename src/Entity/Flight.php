<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Flight
 *
 * @ORM\Table(name="flight", indexes={@ORM\Index(name="IDX_C257E60E78CED90B", columns={"from_id"}), @ORM\Index(name="IDX_C257E60E30354A65", columns={"to_id"}), @ORM\Index(name="IDX_C257E60E966C2F62", columns={"chain_id"})})
 * @ORM\Entity
 */
class Flight
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
     * @ORM\Column(name="airline", type="string", length=255, nullable=true)
     */
    private $airline;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="sun", type="boolean", nullable=true)
     */
    private $sun;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="mon", type="boolean", nullable=true)
     */
    private $mon;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="tue", type="boolean", nullable=true)
     */
    private $tue;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="wed", type="boolean", nullable=true)
     */
    private $wed;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="thu", type="boolean", nullable=true)
     */
    private $thu;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="fri", type="boolean", nullable=true)
     */
    private $fri;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="sat", type="boolean", nullable=true)
     */
    private $sat;

    /**
     * @var \Transferplace
     *
     * @ORM\ManyToOne(targetEntity="Transferplace")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="to_id", referencedColumnName="id")
     * })
     */
    private $to;

    /**
     * @var \Transferplace
     *
     * @ORM\ManyToOne(targetEntity="Transferplace")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="from_id", referencedColumnName="id")
     * })
     */
    private $from;

    /**
     * @var \FlightChain
     *
     * @ORM\ManyToOne(targetEntity="FlightChain")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="chain_id", referencedColumnName="id")
     * })
     */
    private $chain;


}
