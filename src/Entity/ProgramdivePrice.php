<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ProgramdivePrice
 *
 * @ORM\Table(name="programdive_price", indexes={@ORM\Index(name="IDX_926B3FF24EC001D1", columns={"season_id"}), @ORM\Index(name="IDX_926B3FF23EB8070A", columns={"program_id"})})
 * @ORM\Entity
 */
class ProgramdivePrice
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
     * @var \Programdive
     *
     * @ORM\ManyToOne(targetEntity="Programdive")
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
