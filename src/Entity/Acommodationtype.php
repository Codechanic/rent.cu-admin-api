<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Acommodationtype
 *
 * @ORM\Table(name="acommodationtype", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_198CAD195E237E06", columns={"name"})})
 * @ORM\Entity
 */
class Acommodationtype
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
     * @var bool
     *
     * @ORM\Column(name="partial", type="boolean", nullable=false)
     */
    private $partial;


}
