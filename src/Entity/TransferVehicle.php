<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TransferVehicle
 *
 * @ORM\Table(name="transfer_vehicle", indexes={@ORM\Index(name="IDX_A43596CD12469DE2", columns={"category_id"}), @ORM\Index(name="IDX_A43596CDC54C8C93", columns={"type_id"})})
 * @ORM\Entity
 */
class TransferVehicle
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
     * @ORM\Column(name="capacity", type="string", length=255, nullable=false)
     */
    private $capacity;

    /**
     * @var int|null
     *
     * @ORM\Column(name="ordinal", type="integer", nullable=true)
     */
    private $ordinal;

    /**
     * @var int
     *
     * @ORM\Column(name="min_capacity", type="integer", nullable=false)
     */
    private $minCapacity;

    /**
     * @var int
     *
     * @ORM\Column(name="max_capacity", type="integer", nullable=false)
     */
    private $maxCapacity;

    /**
     * @var bool
     *
     * @ORM\Column(name="partial", type="boolean", nullable=false)
     */
    private $partial;

    /**
     * @var \TransferVehicleCategory
     *
     * @ORM\ManyToOne(targetEntity="TransferVehicleCategory")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     * })
     */
    private $category;

    /**
     * @var \TransferVehicleType
     *
     * @ORM\ManyToOne(targetEntity="TransferVehicleType")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="type_id", referencedColumnName="id")
     * })
     */
    private $type;


}
