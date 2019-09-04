<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Collectivetourtype
 *
 * @ORM\Table(name="collectivetourtype")
 * @ORM\Entity
 */
class Collectivetourtype
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
