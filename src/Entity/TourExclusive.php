<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TourExclusive
 *
 * @ORM\Table(name="tour_exclusive")
 * @ORM\Entity
 */
class TourExclusive
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
     * @ORM\Column(name="description", type="text", length=0, nullable=true)
     */
    private $description;

    /**
     * @var float|null
     *
     * @ORM\Column(name="pax1", type="float", precision=10, scale=0, nullable=true)
     */
    private $pax1;

    /**
     * @var float|null
     *
     * @ORM\Column(name="pax2", type="float", precision=10, scale=0, nullable=true)
     */
    private $pax2;

    /**
     * @var float|null
     *
     * @ORM\Column(name="pax3", type="float", precision=10, scale=0, nullable=true)
     */
    private $pax3;

    /**
     * @var float|null
     *
     * @ORM\Column(name="pax4", type="float", precision=10, scale=0, nullable=true)
     */
    private $pax4;

    /**
     * @var float|null
     *
     * @ORM\Column(name="pax5", type="float", precision=10, scale=0, nullable=true)
     */
    private $pax5;

    /**
     * @var float|null
     *
     * @ORM\Column(name="pax6to10", type="float", precision=10, scale=0, nullable=true)
     */
    private $pax6to10;

    /**
     * @var float|null
     *
     * @ORM\Column(name="pax11to15", type="float", precision=10, scale=0, nullable=true)
     */
    private $pax11to15;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="showhome", type="boolean", nullable=true)
     */
    private $showhome;

    /**
     * @var string
     *
     * @ORM\Column(name="slug", type="string", length=255, nullable=false)
     */
    private $slug;


}
