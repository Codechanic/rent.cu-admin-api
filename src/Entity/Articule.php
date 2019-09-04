<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Articule
 *
 * @ORM\Table(name="articule", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_893CA78F2B36786B", columns={"title"})})
 * @ORM\Entity
 */
class Articule
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
     * @ORM\Column(name="slug", type="string", length=255, nullable=false)
     */
    private $slug;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255, nullable=false)
     */
    private $title;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="text", length=0, nullable=true)
     */
    private $description;

    /**
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;


}
