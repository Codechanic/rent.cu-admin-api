<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Graphicads
 *
 * @ORM\Table(name="graphicads", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_514346C6F47645AE", columns={"url"}), @ORM\UniqueConstraint(name="UNIQ_514346C65E237E06", columns={"name"})})
 * @ORM\Entity
 */
class Graphicads
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
     * @ORM\Column(name="url", type="string", length=255, nullable=false)
     */
    private $url;

    /**
     * @var string|null
     *
     * @ORM\Column(name="path", type="string", length=255, nullable=true)
     */
    private $path;


}
