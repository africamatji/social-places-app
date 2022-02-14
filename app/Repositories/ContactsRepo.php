<?php

namespace App\Repositories;
use App\Models\Contacts;

class ContactsRepo {
    /**
     * @param array
     * @return Contacts
     */
    public function create (array $data): Contacts 
    {
        $contacts = Contacts::create($data);

        return $contacts;
    }
}
