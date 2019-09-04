<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RcuAntiquecarbrand
 *
 * @ORM\Table(name="rcu_antiquecarbrand", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_A8A4B7905E237E06", columns={"name"})})
 * @ORM\Entity
 */
class RcuAntiquecarbrand
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


}
