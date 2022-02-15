<?php

namespace App\Http\Controllers;
use App\Repositories\ContactsRepo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Mail\MailDispatcher;
use Illuminate\Support\Facades\Mail;
use Exception;

class ContactsController extends Controller {

    /**
     * @param Request
     * @param ContactsRepo
     * @return JsonResponse
     */
    public function saveContact (Request $request, ContactsRepo $contacts): JsonResponse 
    {
        $validator = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email',
            'gender' => 'required',
            'content' => 'required|max:255',
        ]);

        try { 
            $response = $contacts->create($request->all());
            $this->sendMail($request->name, $request->content);
            return response()->json($response);
        } catch(Exception $e) {

            return response()->json(['success' => false, 'message' => $e->getMessage()], $e->getCode());
        }   
    }

    /**
     * @param ContactsRepo
     * @return JsonResponse
    */
    public function getContacts (ContactsRepo $contacts) : JsonResponse
    {
        try { 
            $response = $contacts->list();
            return response()->json($response);
        } catch(Exception $e) {
            
            return response()->json(['success' => false, 'message' => $e->getMessage()], $e->getCode());
        }  
    }

    /**
     * @param String
     * @param String
     * @return bool
    */
    public function sendMail (String $name, String $content): bool
    {
        $details = [
            'title' => 'Message from : ' . $name,
            'body' => $content
        ];

        Mail::to(env('MAIL_TO_ADDRESS'))->send(new MailDispatcher($details));

        return true;
    }

}

