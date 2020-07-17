<?php

use Illuminate\Database\Seeder;
use App\User;
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
        for ($i = 0; $i < 10; $i++) {
            User::create([
                'title' => $faker->title(50),
                'content' =>$faker->text(200)
            ]);
        }
    }
}
