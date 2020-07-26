<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Information;


class InformationController extends Controller
{
    //
    function index()
    {
        $information = Information::all();
        return response_success(['information' => $information]);
    }

    function update(Request $request)
    {
        $informationUpdated = [];
        foreach ($request->all() as $info) {
            if (is_array($info)) {
                $information = Information::find($info['id']);
                $information->value = $info['value'];
                $information->save();

                array_push($informationUpdated, $information);
            }
        }

        return response_success(['information' => $informationUpdated]);
    }
}
