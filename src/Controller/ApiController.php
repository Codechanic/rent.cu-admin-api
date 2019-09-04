<?php


namespace App\Controller;

use App\Entity\Homestay;
use App\Entity\User;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use JMS\Serializer\SerializerInterface;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Nelmio\ApiDocBundle\Annotation\Model;
use Swagger\Annotations as SWG;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 * Class ApiController
 *
 * @Route("/api")
 */
class ApiController extends AbstractFOSRestController
{

    // USER URI's

    /**
     * @Rest\Post("/login_check", name="user_login_check")
     *
     * @SWG\Response(
     *     response=200,
     *     description="User was logged in successfully"
     * )
     *
     * @SWG\Response(
     *     response=401,
     *     description="User was not logged in successfully"
     * )
     *
     * @SWG\Parameter(
     *     name="_username",
     *     in="body",
     *     type="string",
     *     description="The username",
     *     schema={
     *     }
     * )
     *
     * @SWG\Parameter(
     *     name="_password",
     *     in="body",
     *     type="string",
     *     description="The password",
     *     schema={}
     * )
     *
     * @SWG\Tag(name="User")
     */
    public function getLoginCheckAction() {}

    /**
     * @Rest\Get("/v1/home.{_format}", name="home_list_all", defaults={"_format":"json"})
     *
     * @SWG\Response(
     *     response=200,
     *     description="Gets all houses for current logged user."
     * )
     *
     * @SWG\Response(
     *     response=500,
     *     description="An error has occurred trying to get all user boards."
     * )
     *
     *
     *
     * @SWG\Tag(name="Homestay")
     */
    public function getAllHomestayAction(Request $request, SerializerInterface  $jsmSerialize) {
//        $serializer = $this->get('jms_serializer');
        $serializer = $jsmSerialize;
        $em = $this->getDoctrine()->getManager();
        $boards = [];
        $message = "";

        try {
            $code = 200;
            $error = false;

            $userId = $this->getUser()->getId();
            $boards = $em->getRepository(Homestay::class)->findAll();
            $encoders = [new JsonEncoder()];
            $normalizers = [new ObjectNormalizer()];

            $serializer = new Serializer($normalizers, $encoders);

            if (is_null($boards)) {
                $boards = [];
            }
            $data = $serializer->serialize(
                $boards, 'json');


            return new JsonResponse($data,$code,[],true);

        } catch (Exception $ex) {
            $code = 500;
            $error = true;
            $message = "An error has occurred trying to get all Houses - Error: {$ex->getMessage()}";
            return new JsonResponse([
                'message'=>$message
            ],$code);
        }
    }
}