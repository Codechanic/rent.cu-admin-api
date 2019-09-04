<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ProgramPrice
 *
 * @ORM\Table(name="program_price", indexes={@ORM\Index(name="IDX_54A1512F4EC001D1", columns={"season_id"}), @ORM\Index(name="IDX_54A1512F53C674EE", columns={"offer_id"})})
 * @ORM\Entity
 */
class ProgramPrice
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
     * @var \ProgramOffer
     *
     * @ORM\ManyToOne(targetEntity="ProgramOffer")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="offer_id", referencedColumnName="id")
     * })
     */
    private $offer;


}
