<?php

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use App\Models\Permission;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $owner = new Role();
        $owner->name = 'member';
        $owner->display_name = "Website's memeber";
        $owner->description = 'User is the member of website';
        $owner->save();

        $admin = new Role();
        $admin->name = 'admin';
        $admin->display_name = 'User Administrator';
        $admin->description = 'User is allowed to manage and edit other users';
        $admin->save();


        $user = User::where('email', '=', 'nam@autointegrity.com.au')->first();
        // dd($user);
// role attach alias
        // $user->attachRole($admin); // parameter can be an Role object, array, or id

// or eloquent's original technique
        $user->roles()->attach($admin->id); // id only


        $createPost = new Permission();
        $createPost->name = 'create-post';
        $createPost->display_name = 'Create Posts'; // optional
// Allow a user to...
        $createPost->description = 'create new blog posts'; // optional
        $createPost->save();

        $editUser = new Permission();
        $editUser->name = 'edit-user';
        $editUser->display_name = 'Edit Users'; // optional
// Allow a user to...
        $editUser->description = 'edit existing users'; // optional
        $editUser->save();


        $loginAdmin = new Permission();
        $loginAdmin->name = 'login-admin';
        $loginAdmin->display_name = 'Login Admin'; // optional
// Allow a user to...
        $loginAdmin->description = 'login admin page'; // optional
        $loginAdmin->save();

        $admin->attachPermission($loginAdmin);
    }
}
