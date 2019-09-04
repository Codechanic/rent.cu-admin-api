<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Transferplace
 *
 * @ORM\Table(name="transferplace")
 * @ORM\Entity
 */
class Transferplace
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
