<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RcuAntiquecar
 *
 * @ORM\Table(name="rcu_antiquecar", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_D7544DF8E7927C74", columns={"email"}), @ORM\UniqueConstraint(name="UNIQ_D7544DF8989D9B62", columns={"slug"})}, indexes={@ORM\Index(name="IDX_D7544DF86316CAA9", columns={"carbrand_id"}), @ORM\Index(name="IDX_D7544DF8AE6F181C", columns={"municipality_id"})})
 * @ORM\Entity
 */
class RcuAntiquecar
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
     * @ORM\Column(name="slug", type="string", length=255, nullable=false)
     */
    private $slug;

    /**
     * @var bool
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=false)
     */
    private $enabled;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="owner", type="string", length=255, nullable=false)
     */
    private $owner;

    /**
     * @var bool
     *
     * @ORM\Column(name="hardcover", type="boolean", nullable=false)
     */
    private $hardcover;

    /**
     * @var bool
     *
     * @ORM\Column(name="convertible", type="boolean", nullable=false)
     */
    private $convertible;

    /**
     * @var int
     *
     * @ORM\Column(name="year", type="integer", nullable=false)
     */
    private $year;

    /**
     * @var string
     *
     * @ORM\Column(name="color", type="string", length=255, nullable=false)
     */
    private $color;

    /**
     * @var float
     *
     * @ORM\Column(name="pricehour", type="float", precision=10, scale=0, nullable=false)
     */
    private $pricehour;

    /**
     * @var float
     *
     * @ORM\Column(name="price8hour", type="float", precision=10, scale=0, nullable=false)
     */
    private $price8hour;

    /**
     * @var string|null
     *
     * @ORM\Column(name="phones", type="string", length=255, nullable=true)
     */
    private $phones;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;

    /**
     * @var int
     *
     * @ORM\Column(name="rank", type="integer", nullable=false)
     */
    private $rank;

    /**
     * @var \RcuAntiquecarbrand
     *
     * @ORM\ManyToOne(targetEntity="RcuAntiquecarbrand")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="carbrand_id", referencedColumnName="id")
     * })
     */
    private $carbrand;

    /**
     * @var \Municipality
     *
     * @ORM\ManyToOne(targetEntity="Municipality")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="municipality_id", referencedColumnName="id")
     * })
     */
    private $municipality;


}
