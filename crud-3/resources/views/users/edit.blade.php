<form action="{{route('users.update',$user->id)}}" method="post">
<input type="hidden" name="_token" value="{{csrf_token()}}">
<input type="hidden" name="_method" value="put">
<label class="text-uppercase font-weight-bold" for="name">name</label>
<input type="text" class="form-control rounded-0" id="name" placeholder="Name" name="name"
value="{{$user->name}}">
<label class="text-uppercase font-weight-bold" for="email">email</label>
<input type="email" class="form-control rounded-0" id="email" placeholder="Email" name="email"
value="{{$user->email}}">
<button type="submit" class="btn btn-warning text-uppercase rounded-0 font-weight-bold">save</button></form