@extends('layout.master')
@section('content')
@component('layout.components.title')
Articles
@endcomponent

<div class="container mt-3">
  <div class="row">
    <div class="col-12">
      <table class="table table-hover table-bordered">
        <thead>
          <tr class="text-center">
            <th scope="col" class="">#</th>
            <th scope="col" class="">title</th>
            <th scope="col" class="">slug</th>
            <th scope="col" class="">description</th>
            <th scope="col" class="">content</th>
            <th scope="col" class="">Action</th>

          </tr>
        </thead>
        <tbody>
          @foreach($articles as $article)
          <tr class="text-center">
            <th scope="row">{{$article->id}}</th>
            <td>{{$article->title}}</td>
            <td>{{$article->slug}}</td>
            <td>{{$article->description}}</td>
            <td>{{$article->content}}</td>
            <td class="d-flex align-items-center justify-content-around">
            <form action="{{route('articles.show',$article->id)}}" method="get">
                <button class="btn btn-sm btn-primary rounded-0">
                  Show
                </button>
              </form>
              <form action="{{route('articles.edit',$article->id)}}" method="get">
                <button class="btn btn-sm btn-warning rounded-0">
                  Edit
                </button>
              </form>
              <form action="{{route('articles.destroy',$article->id)}}" method="post">
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

      <div class="container mb-5">
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center">
        <span class="text-uppercase text-muted">
          user crud laravel
        </span>
        <form action="{{route('articles.create')}}" method="get">
          <button type="submit" class="btn btn-info text-uppercase font-weight-bold rounded-0">
            create a articles
          </button>
          <!-- tạo nút button khi bấm vào route sẽ chuyển đến users.create -->
        </form>
      </div>
    </div>
  </div>
</div>
@endsection