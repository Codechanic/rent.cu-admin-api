<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RcuApplicant
 *
 * @ORM\Table(name="rcu_applicant")
 * @ORM\Entity
 */
class RcuApplicant
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
     * @var string|null
     *
     * @ORM\Column(name="message", type="text", length=0, nullable=true)
     */
    private $message;


}
