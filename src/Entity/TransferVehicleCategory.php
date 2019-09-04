<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TransferVehicleCategory
 *
 * @ORM\Table(name="transfer_vehicle_category")
 * @ORM\Entity
 */
class TransferVehicleCategory
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

    /**
     * @var bool|null
     *
     * @ORM\Column(name="collective", type="boolean", nullable=true)
     */
    private $collective;


}
