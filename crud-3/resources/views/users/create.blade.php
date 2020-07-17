<form action="{{route('users.store')}}" method="post">
<input type="hidden" name="_token" value="{{csrf_token()}}">
<label class="text-uppercase font-weight-bold" for="name">name</label>
<input type="text" class="form-control rounded-0" id="name" placeholder="Name" name="name">
<label class="text-uppercase font-weight-bold" for="email">email</label>
<input type="email" class="form-control rounded-0" id="email" placeholder="Email" name="email">
<label class="text-uppercase font-weight-bold" for="password">password</label>
<input type="password" class="form-control rounded-0" id="password" placeholder="Password" name="password">
<button type="submit" class="btn btn-danger text-uppercase rounded-0 font-weight-bold">confirm</button></form>
<form action="{{route('users.index')}}" method="get"><button>Tro ve</button>
</form>