<?php 
namespace App\Http\Controllers;

use Auth;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller {

    /**
     * @param Request
     * return JsonResponse
     */
    public function authenticate (Request $request): JsonResponse 
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password]))
        {
            $response = [
                'success' => true,
            ];
            return response()->json($response);
        } else {
            $response = [
                'success' => false,
            ];
            return response()->json($response, 401);
        }
    }
}
