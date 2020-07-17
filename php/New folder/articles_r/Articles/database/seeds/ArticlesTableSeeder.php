<?php

use Illuminate\Database\Seeder;
use App\Article;
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
        for ($i = 0; $i < 10; $i++) {
            $title = $faker->sentence(rand(4,6),true);
            $slug= Str::slug($title,'-');
            article::create([
                'title' => $title,
                'slug' => $slug,
                'description' => $faker->realText(),
                'content' => $faker->text(),
            ]);
        };
    }
}
