<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Currency
 *
 * @ORM\Table(name="currency")
 * @ORM\Entity
 */
class Currency
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
     * @var string
     *
     * @ORM\Column(name="currency", type="string", length=255, nullable=false)
     */
    private $currency;

    /**
     * @var float
     *
     * @ORM\Column(name="canje", type="float", precision=10, scale=0, nullable=false)
     */
    private $canje;

    /**
     * @var bool
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=false)
     */
    private $enabled;

    /**
     * @var bool
     *
     * @ORM\Column(name="default_currency", type="boolean", nullable=false)
     */
    private $defaultCurrency;


}
