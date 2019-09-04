<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GalleryImage
 *
 * @ORM\Table(name="gallery_image")
 * @ORM\Entity
 */
class GalleryImage
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
     * @ORM\Column(name="path", type="string", length=255, nullable=false)
     */
    private $path;

    /**
     * @var string
     *
     * @ORM\Column(name="owner", type="string", length=255, nullable=false)
     */
    private $owner;


}
