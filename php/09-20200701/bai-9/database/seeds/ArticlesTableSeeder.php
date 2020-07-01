<?php

use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
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
        DB::table('articles')->insert([
            'title'=>$faker->text(50),
            'description'=> $faker->text(200),
            'content'=> $faker->text(200),
        ]);
    }
}
