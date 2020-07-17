<?php

use Illuminate\Database\Seeder;
use App\user;
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
        $faker = Faker\Factory::create();
        for ($i = 0; $i < 20; $i++){
            User::create([
                'name' => $faker->name(),
                'email' => $faker->companyEmail,
                'password' => bcrypt('12')
            ]);
        }
    }
}
