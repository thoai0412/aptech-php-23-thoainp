<?php

use Illuminate\Database\Seeder;
use App\Models\Information;

class InformationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Information::create([
            'name' => 'website',
            'value' => 'crashzone'
        ]);
        Information::create([
            'name' => 'domain',
            'value' => 'crashzone.com.au'
        ]);
        Information::create([
            'name' => 'slogan',
            'value' => 'the first free web based quoting system for smash repairers'
        ]);
        Information::create([
            'name' => 'address',
            'value' => 'P.O Box 4 - North Sydney - NSW 2060'
        ]);
        Information::create([
            'name' => 'abn',
            'value' => '63125055996',
        ]);
        Information::create([
            'name' => 'phone',
            'value' => '02 9011 6647'
        ]);
        Information::create([
            'name' => 'email',
            'value' => 'support@crashzone.com.au'
        ]);
        Information::create([
            'name' => 'working hour',
            'value' => 'Monday - Friday: 9:00 AM - 6:00 PM'
        ]);
    }
}
