@extends('layout.master')
@section('content')
@component('layout.components.title')
index page
@endcomponent
<div class="container mt-3">
  <div class="row">
    <div class="col-12">
      <table class="table table-striped table-hover">
        <thead>
          <tr class="text-center">
            <th scope="col" class="">#</th>
            <th scope="col" class="">Name</th>
            <th scope="col" class="">Email</th>
            <th scope="col" class="">Action</th>
          </tr>
        </thead>
        <tbody>
          @foreach($users as $user)
          <tr class="text-center">
            <th scope="row">{{$user->id}}</th>
            <td>{{$user->name}}</td>
            <td>{{$user->email}}</td>
            <td class="d-flex align-items-center justify-content-around">
              <form action="{{route('users.show',$user->id)}}" method="get">
                <button class="btn btn-sm btn-primary rounded-0">
                  Show
                </button>
              </form>
              <form action="{{route('users.edit',$user->id)}}" method="get">
                <button class="btn btn-sm btn-warning rounded-0">
                  Edit
                </button>
              </form>
              <form action="{{route('users.destroy',$user->id)}}" method="post">
                <input type="hidden" name="_token" value="{{csrf_token()}}">
                <input type="hidden" name="_method" value="delete">
                <button class="btn btn-sm btn-danger rounded-0">
                  Delete
                </button>
              </form>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
      <div class="d-flex justify-content-center">{{$users->links()}}</div>
    </div>
  </div>
</div>
<div class="container mb-5">
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center">
        <span class="text-uppercase text-muted">
          user crud laravel
        </span>
        <form action="{{route('users.create')}}" method="get">
          <button type="submit" class="btn btn-info text-uppercase font-weight-bold rounded-0">
            create a new user
          </button>
          <!-- tạo nút button khi bấm vào route sẽ chuyển đến users.create -->
        </form>
      </div>
    </div>
  </div>
</div>
@endsection
