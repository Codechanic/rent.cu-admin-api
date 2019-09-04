<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ProgramroutePrice
 *
 * @ORM\Table(name="programroute_price", indexes={@ORM\Index(name="IDX_22C61DBB4EC001D1", columns={"season_id"}), @ORM\Index(name="IDX_22C61DBB3EB8070A", columns={"program_id"})})
 * @ORM\Entity
 */
class ProgramroutePrice
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
     * @var \Programroute
     *
     * @ORM\ManyToOne(targetEntity="Programroute")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="program_id", referencedColumnName="id")
     * })
     */
    private $program;

    /**
     * @var \Season
     *
     * @ORM\ManyToOne(targetEntity="Season")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="season_id", referencedColumnName="id")
     * })
     */
    private $season;


}
