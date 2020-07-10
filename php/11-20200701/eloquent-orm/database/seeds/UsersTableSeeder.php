<?php

use App\User;
use Illuminate\Database\Seeder;
use illuminate\Support\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $tiengicungdc = Faker\Factory::create();

        for ($i = 0; $i < 10; $i++){
            // $name = $tiengicungdc->name();
            // $email = $tiengicungdc->safeEmail;
            User::create([
                "name" => $name,
                "email" => $email,
                "password" => bcrypt('123456')
            ]);
        }
    }
}
