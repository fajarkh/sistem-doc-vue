<?php

namespace App\Http\Controllers;

use App\Models\Sekolah;
use Barqdev\Autocrud\AutoBase;
use App\Http\Requests\SekolahRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Schema;
use Illuminate\Http\Request;

class SekolahController extends Controller
{
    use AutoBase;

    public function __construct()
    {
        $this->model = new Sekolah;
        $this->searchFields = [
            ...Schema::getColumnListing((new Sekolah)->getTable())
        ]; //Fill with searchable searchFields
        $this->request = new SekolahRequest;
    }

    public function customRequestData($request){

        //if($request->has('file'))
        //    $request['foto'] = $this->upload('foto',$request->file);

        return $request;
    }

    public function callbackAfterStoreOrUpdate($data, $request)
    {
        # code...
        return $data;
    }
}
