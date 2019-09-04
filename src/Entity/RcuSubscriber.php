<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RcuSubscriber
 *
 * @ORM\Table(name="rcu_subscriber", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_70A654A6E7927C74", columns={"email"})})
 * @ORM\Entity
 */
class RcuSubscriber
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
     * @ORM\Column(name="email", type="string", length=255, nullable=false)
     */
    private $email;

    /**
     * @var bool
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=false)
     */
    private $enabled;

    /**
     * @var bool
     *
     * @ORM\Column(name="locked", type="boolean", nullable=false)
     */
    private $locked;


}
