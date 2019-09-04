<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Carbrand
 *
 * @ORM\Table(name="carbrand", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_8A1D9DEF5E237E06", columns={"name"})})
 * @ORM\Entity
 */
class Carbrand
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
