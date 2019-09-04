<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RcuVisit
 *
 * @ORM\Table(name="rcu_visit", uniqueConstraints={@ORM\UniqueConstraint(name="UNIQ_A0EC032FF47645AEA5E3B32D", columns={"url", "ip"})})
 * @ORM\Entity
 */
class RcuVisit
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
     * @ORM\Column(name="entity_class", type="string", length=255, nullable=false)
     */
    private $entityClass;

    /**
     * @var int
     *
     * @ORM\Column(name="entity_id", type="integer", nullable=false)
     */
    private $entityId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="update_date", type="datetime", nullable=false)
     */
    private $updateDate;

    /**
     * @var string
     *
     * @ORM\Column(name="url", type="string", length=255, nullable=false)
     */
    private $url;

    /**
     * @var string
     *
     * @ORM\Column(name="ip", type="string", length=255, nullable=false)
     */
    private $ip;

    /**
     * @var int
     *
     * @ORM\Column(name="count", type="integer", nullable=false)
     */
    private $count;


}
