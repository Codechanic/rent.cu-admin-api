<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RcuSettings
 *
 * @ORM\Table(name="rcu_settings")
 * @ORM\Entity
 */
class RcuSettings
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
     * @var string|null
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @var string|null
     *
     * @ORM\Column(name="title", type="text", length=0, nullable=true)
     */
    private $title;

    /**
     * @var string|null
     *
     * @ORM\Column(name="facebook", type="string", length=255, nullable=true)
     */
    private $facebook;

    /**
     * @var string|null
     *
     * @ORM\Column(name="twitter", type="string", length=255, nullable=true)
     */
    private $twitter;

    /**
     * @var string|null
     *
     * @ORM\Column(name="tripadvisor", type="string", length=255, nullable=true)
     */
    private $tripadvisor;

    /**
     * @var string|null
     *
     * @ORM\Column(name="googleplus", type="string", length=255, nullable=true)
     */
    private $googleplus;

    /**
     * @var string|null
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string|null
     *
     * @ORM\Column(name="address", type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @var string|null
     *
     * @ORM\Column(name="phones", type="string", length=255, nullable=true)
     */
    private $phones;

    /**
     * @var string|null
     *
     * @ORM\Column(name="contactdescription", type="text", length=0, nullable=true)
     */
    private $contactdescription;

    /**
     * @var string|null
     *
     * @ORM\Column(name="aboutus", type="text", length=0, nullable=true)
     */
    private $aboutus;

    /**
     * @var string|null
     *
     * @ORM\Column(name="domain", type="string", length=255, nullable=true)
     */
    private $domain;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="offline", type="boolean", nullable=true)
     */
    private $offline;

    /**
     * @var string|null
     *
     * @ORM\Column(name="message", type="text", length=0, nullable=true)
     */
    private $message;

    /**
     * @var float|null
     *
     * @ORM\Column(name="exchangecuc", type="float", precision=10, scale=0, nullable=true)
     */
    private $exchangecuc;

    /**
     * @var string|null
     *
     * @ORM\Column(name="meta_title", type="string", length=255, nullable=true)
     */
    private $metaTitle;

    /**
     * @var string|null
     *
     * @ORM\Column(name="meta_description", type="string", length=255, nullable=true)
     */
    private $metaDescription;

    /**
     * @var string|null
     *
     * @ORM\Column(name="meta_keywords", type="string", length=255, nullable=true)
     */
    private $metaKeywords;

    /**
     * @var string|null
     *
     * @ORM\Column(name="adminemail", type="string", length=255, nullable=true)
     */
    private $adminemail;

    /**
     * @var string|null
     *
     * @ORM\Column(name="policies", type="text", length=0, nullable=true)
     */
    private $policies;


}
