{{$user->id}}
<hr>
{{$user->name}}
<hr>
{{$user->email}}
<hr>
{{$user->password}}
<hr>
{{$user->created_at}}
<hr>
{{$user->updated_at}}
<hr>
<form action="{{route('users.edit',$user->id)}}" method="get">
<button class="btn btn-sm btn-warning mx-2 rounded-0">Edit</button>
</form>
<form action="{{route('users.destroy',$user->id)}}" method="post">
<input type="hidden" name="_token" value="{{csrf_token()}}">
<input type="hidden" name="_method" value="delete">
<button class="btn btn-sm btn-danger mx-2 rounded-0">Delete</button>
</form>