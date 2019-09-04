<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CarPrice
 *
 * @ORM\Table(name="car_price", indexes={@ORM\Index(name="IDX_1563A70EA7CF2329", columns={"rental_id"}), @ORM\Index(name="IDX_1563A70E12469DE2", columns={"category_id"}), @ORM\Index(name="IDX_1563A70E4EC001D1", columns={"season_id"})})
 * @ORM\Entity
 */
class CarPrice
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
     * @var \Carcategory
     *
     * @ORM\ManyToOne(targetEntity="Carcategory")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     * })
     */
    private $category;

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
     * @var \Rental
     *
     * @ORM\ManyToOne(targetEntity="Rental")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="rental_id", referencedColumnName="id")
     * })
     */
    private $rental;


}
