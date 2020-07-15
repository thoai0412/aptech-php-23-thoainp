@extends('layout.master')
@section('content')

<div class="container mt-3">
  <div class="d-flex flex-row">
    <div class="col-12 px-0">
      <form action="{{route('articles.store')}}" method="post">
        <input type="hidden" name="_token" value="{{csrf_token()}}">
        <div class="form-group ">
          <label class="text-uppercase font-weight-bold" for="title">title</label>
          <input type="text" class="form-control rounded-0" id="title" placeholder="Title" name="title">
        </div>
        <div class="form-group ">
          <label class="text-uppercase font-weight-bold" for="description">Description:</label>
          <input type="description" class="form-control rounded-0" id="description" placeholder="Description" name="description">
        </div>
        <div class="form-group ">
        <label class="text-uppercase font-weight-bold" for="content">Content:</label>
        <textarea rows="50" cols="50" id="content" name="content" placeholder="Description"></textarea>
        </div>


        <div>
            <label for="categories">Categories:</label>
            <select name="category" id="categories">
                @foreach($categories as $category)
                <option value="{{$category}}">{{$category}}</option>
                @endforeach
            </select>
        </div>


        <div class="form-group ">
          <button type="submit" class="btn btn-danger text-uppercase rounded-0 font-weight-bold">
          Luu Bai Viet
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
<script src="https://cdn.ckeditor.com/ckeditor5/20.0.0/classic/ckeditor.js"></script>
    <script>
        ClassicEditor
            .create( document.querySelector( '#content' ) )
            .catch( error => {
                console.error( error );
            } );
    </script>
@endsection