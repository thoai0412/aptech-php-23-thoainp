{{$user->id}}
<hr>
{{$user->title}}
<hr>
{{$user->content}}
<hr>
{{$user->created_at}}
<hr>
{{$user->updated_at}}
<hr>
<form action="{{route('users.edit',$user->id)}}" method="get">
<button>
Edit
</button>
</form>
<form action="{{route('users.destroy',$user->id)}}" method="post">
<input type="hidden" name="_token" value="{{csrf_token()}}">
<input type="hidden" name="_method" value="delete">
<button>Delete</button>
</form>