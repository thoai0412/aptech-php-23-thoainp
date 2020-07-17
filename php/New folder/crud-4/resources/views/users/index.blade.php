<head>
<style>
td{
    border-style: groove;
};
</style>
</head>
<H3>Bai Viet</H3>
@foreach($users as $user)
<table>
<thead>
<tr>
<th>{{$user->id}}</th>
</tr>
</thead>
<tbody>
<tr></tr>
<td><a href="{{route('users.show',$user->id)}}"></a>Tieu De</td>
<td><a href="{{route('users.show',$user->id)}}">{{$user->title}}</a></td>
<td>Khoi tao:{{$user->created_at}}</td>
<td>Lan cuoi cap nhat:{{$user->updated_at}}</td>
</tbody>
</table>
@endforeach