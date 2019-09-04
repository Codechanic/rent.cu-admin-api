<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Reservation
 *
 * @ORM\Table(name="reservation")
 * @ORM\Entity
 */
class Reservation
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
     * @ORM\Column(name="flynumber", type="string", length=255, nullable=false)
     */
    private $flynumber;

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
     * @var string
     *
     * @ORM\Column(name="country", type="string", length=255, nullable=false)
     */
    private $country;

    /**
     * @var string
     *
     * @ORM\Column(name="token", type="string", length=255, nullable=false)
     */
    private $token;

    /**
     * @var int
     *
     * @ORM\Column(name="status", type="integer", nullable=false)
     */
    private $status;

    /**
     * @var string
     *
     * @ORM\Column(name="code", type="string", length=255, nullable=false)
     */
    private $code;

    /**
     * @var string
     *
     * @ORM\Column(name="passport", type="string", length=255, nullable=false)
     */
    private $passport;

    /**
     * @var string
     *
     * @ORM\Column(name="terminal", type="string", length=255, nullable=false)
     */
    private $terminal;

    /**
     * @var string
     *
     * @ORM\Column(name="observations", type="string", length=255, nullable=false)
     */
    private $observations;

    /**
     * @var string
     *
     * @ORM\Column(name="created", type="string", length=255, nullable=false)
     */
    private $created;


}
