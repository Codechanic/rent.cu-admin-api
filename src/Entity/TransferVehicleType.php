<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TransferVehicleType
 *
 * @ORM\Table(name="transfer_vehicle_type")
 * @ORM\Entity
 */
class TransferVehicleType
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
     * @var int|null
     *
     * @ORM\Column(name="ordinal", type="integer", nullable=true)
     */
    private $ordinal;


}
