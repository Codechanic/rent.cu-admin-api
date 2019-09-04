<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Slide
 *
 * @ORM\Table(name="slide")
 * @ORM\Entity
 */
class Slide
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
     * @ORM\Column(name="title", type="text", length=0, nullable=false)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="subtitle", type="text", length=0, nullable=false)
     */
    private $subtitle;

    /**
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=true)
     */
    private $enabled;


}
