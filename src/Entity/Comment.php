<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Comment
 *
 * @ORM\Table(name="comment", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_9474526C5E237E06", columns={"name"})}, indexes={@ORM\Index(name="IDX_9474526CF20D79E8", columns={"homestay_id"})})
 * @ORM\Entity
 */
class Comment
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
     * @var string|null
     *
     * @ORM\Column(name="nick", type="string", length=255, nullable=true)
     */
    private $nick;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text", length=0, nullable=false)
     */
    private $text;

    /**
     * @var float
     *
     * @ORM\Column(name="rating", type="float", precision=10, scale=0, nullable=false)
     */
    private $rating;

    /**
     * @var \Homestay
     *
     * @ORM\ManyToOne(targetEntity="Homestay")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="homestay_id", referencedColumnName="id")
     * })
     */
    private $homestay;


}
