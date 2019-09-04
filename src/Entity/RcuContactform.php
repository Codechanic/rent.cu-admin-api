<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RcuContactform
 *
 * @ORM\Table(name="rcu_contactform", indexes={@ORM\Index(name="IDX_E9DFFCA3F20D79E8", columns={"homestay_id"})})
 * @ORM\Entity
 */
class RcuContactform
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
     * @ORM\Column(name="email", type="string", length=255, nullable=false)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string", length=255, nullable=false)
     */
    private $phone;

    /**
     * @var string|null
     *
     * @ORM\Column(name="message", type="text", length=0, nullable=true)
     */
    private $message;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="fromdate", type="date", nullable=false)
     */
    private $fromdate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="todate", type="date", nullable=false)
     */
    private $todate;

    /**
     * @var bool
     *
     * @ORM\Column(name="active", type="boolean", nullable=false)
     */
    private $active;

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
