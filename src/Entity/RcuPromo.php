<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RcuPromo
 *
 * @ORM\Table(name="rcu_promo", indexes={@ORM\Index(name="IDX_538170EDF20D79E8", columns={"homestay_id"})})
 * @ORM\Entity
 */
class RcuPromo
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
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @var int
     *
     * @ORM\Column(name="showcount", type="integer", nullable=false)
     */
    private $showcount;

    /**
     * @var int
     *
     * @ORM\Column(name="showoffset", type="integer", nullable=false)
     */
    private $showoffset;

    /**
     * @var string|null
     *
     * @ORM\Column(name="url", type="string", length=255, nullable=true)
     */
    private $url;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="from_date", type="datetime", nullable=false)
     */
    private $fromDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="to_date", type="datetime", nullable=false)
     */
    private $toDate;

    /**
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;

    /**
     * @var string
     *
     * @ORM\Column(name="promo_type", type="string", length=255, nullable=false)
     */
    private $promoType;

    /**
     * @var float|null
     *
     * @ORM\Column(name="discount", type="float", precision=10, scale=0, nullable=true)
     */
    private $discount;

    /**
     * @var float|null
     *
     * @ORM\Column(name="price", type="float", precision=10, scale=0, nullable=true)
     */
    private $price;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="isnew", type="boolean", nullable=true)
     */
    private $isnew;

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
