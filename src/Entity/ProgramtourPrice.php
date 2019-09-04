<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ProgramtourPrice
 *
 * @ORM\Table(name="programtour_price", indexes={@ORM\Index(name="IDX_EA2962334EC001D1", columns={"season_id"}), @ORM\Index(name="IDX_EA2962333EB8070A", columns={"program_id"})})
 * @ORM\Entity
 */
class ProgramtourPrice
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
     * @var float
     *
     * @ORM\Column(name="childprice", type="float", precision=10, scale=0, nullable=false)
     */
    private $childprice;

    /**
     * @var float
     *
     * @ORM\Column(name="supplement", type="float", precision=10, scale=0, nullable=false)
     */
    private $supplement;

    /**
     * @var string
     *
     * @ORM\Column(name="code", type="string", length=255, nullable=false)
     */
    private $code;

    /**
     * @var \Programtour
     *
     * @ORM\ManyToOne(targetEntity="Programtour")
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
