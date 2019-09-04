<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Transfer
 *
 * @ORM\Table(name="transfer", indexes={@ORM\Index(name="IDX_4034A3C078CED90B", columns={"from_id"}), @ORM\Index(name="IDX_4034A3C0545317D1", columns={"vehicle_id"}), @ORM\Index(name="IDX_4034A3C030354A65", columns={"to_id"})})
 * @ORM\Entity
 */
class Transfer
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
     * @var \TransferVehicle
     *
     * @ORM\ManyToOne(targetEntity="TransferVehicle")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="vehicle_id", referencedColumnName="id")
     * })
     */
    private $vehicle;

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
