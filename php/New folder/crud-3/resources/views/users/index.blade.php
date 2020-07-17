@foreach ($users as $user)
{{$user->id}}
<hr>
{{$user->name}}
<hr>
{{$user->email}}
<div style="display: flex">
<form action="{{route('users.show',$user->id)}}" method="get">
<button>Show</button>
</form>
<form action="{{route('users.edit',$user->id)}}" method="get">
<button>Edit</button>
</form>
<form action="{{route('users.destroy',$user->id)}}" method="post">
<input type="hidden" name="_token" value="{{csrf_token()}}">
<input type="hidden" name="_method" value="delete">
<button>Delete</button>
</form>
</div>
<hr>
@endforeach
<form action="{{route('users.create')}}" method="get">
    <button>create a new user</button>
</form>