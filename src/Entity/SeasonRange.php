<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * SeasonRange
 *
 * @ORM\Table(name="season_range", indexes={@ORM\Index(name="IDX_84B6AD964EC001D1", columns={"season_id"})})
 * @ORM\Entity
 */
class SeasonRange
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
     * @var \Season
     *
     * @ORM\ManyToOne(targetEntity="Season")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="season_id", referencedColumnName="id")
     * })
     */
    private $season;


}
