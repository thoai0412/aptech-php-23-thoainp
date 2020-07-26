<?php

use Illuminate\Database\Seeder;
use App\Models\Menu;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menus = [
            ['name' => 'Home', 'slug' => 'home'],
            ['name' => 'Blog', 'slug' => 'blog'],
            ['name' => 'Forum', 'slug' => 'forum'],
            ['name' => 'Help', 'slug' => 'help'],
            ['name' => 'Contact', 'slug' => 'contact'],
            ['name' => 'Rate Calculator', 'slug' => 'rate-calculator'],
        ];
        foreach ($menus as $menu) {
            Menu::create($menu);
        }
    }
}
