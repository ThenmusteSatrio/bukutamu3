@extends('layout.main')
@section('container')

<div id="app"></div>
@if (Auth::check())
<script>
    window.userData = @json(['status' => Auth::user()->status]);
</script>
@endif




@endsection


