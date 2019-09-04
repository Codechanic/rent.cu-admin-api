<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TransferCollective
 *
 * @ORM\Table(name="transfer_collective", indexes={@ORM\Index(name="IDX_2A522B4B30354A65", columns={"to_id"}), @ORM\Index(name="IDX_2A522B4B78CED90B", columns={"from_id"})})
 * @ORM\Entity
 */
class TransferCollective
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
     * @var float
     *
     * @ORM\Column(name="price", type="float", precision=10, scale=0, nullable=false)
     */
    private $price;

    /**
     * @var \Transferplace
     *
     * @ORM\ManyToOne(targetEntity="Transferplace")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="to_id", referencedColumnName="id")
     * })
     */
    private $to;

    /**
     * @var \Transferplace
     *
     * @ORM\ManyToOne(targetEntity="Transferplace")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="from_id", referencedColumnName="id")
     * })
     */
    private $from;


}
