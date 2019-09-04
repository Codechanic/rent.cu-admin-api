<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TourCollective
 *
 * @ORM\Table(name="tour_collective", indexes={@ORM\Index(name="IDX_1643033DC54C8C93", columns={"type_id"})})
 * @ORM\Entity
 */
class TourCollective
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
     * @var string
     *
     * @ORM\Column(name="going", type="string", length=255, nullable=false)
     */
    private $going;

    /**
     * @var string|null
     *
     * @ORM\Column(name="time", type="string", length=255, nullable=true)
     */
    private $time;

    /**
     * @var float|null
     *
     * @ORM\Column(name="paxprice", type="float", precision=10, scale=0, nullable=true)
     */
    private $paxprice;

    /**
     * @var float|null
     *
     * @ORM\Column(name="childprice", type="float", precision=10, scale=0, nullable=true)
     */
    private $childprice;

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

    /**
     * @var \TourCollectiveType
     *
     * @ORM\ManyToOne(targetEntity="TourCollectiveType")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="type_id", referencedColumnName="id")
     * })
     */
    private $type;


}
