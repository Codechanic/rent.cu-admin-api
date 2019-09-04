<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RcuExternallink
 *
 * @ORM\Table(name="rcu_externallink")
 * @ORM\Entity
 */
class RcuExternallink
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
     * @ORM\Column(name="url", type="string", length=255, nullable=false)
     */
    private $url;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    private $name;

    /**
     * @var int
     *
     * @ORM\Column(name="norder", type="integer", nullable=false)
     */
    private $norder;

    /**
     * @var bool
     *
     * @ORM\Column(name="inhc", type="boolean", nullable=false)
     */
    private $inhc;

    /**
     * @var bool
     *
     * @ORM\Column(name="inrc", type="boolean", nullable=false)
     */
    private $inrc;


}
