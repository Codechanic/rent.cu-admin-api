<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HomestayPrice
 *
 * @ORM\Table(name="homestay_price", indexes={@ORM\Index(name="IDX_F4704656F20D79E8", columns={"homestay_id"}), @ORM\Index(name="IDX_F47046564EC001D1", columns={"season_id"})})
 * @ORM\Entity
 */
class HomestayPrice
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
     * @var \Homestay
     *
     * @ORM\ManyToOne(targetEntity="Homestay")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="homestay_id", referencedColumnName="id")
     * })
     */
    private $homestay;


}
