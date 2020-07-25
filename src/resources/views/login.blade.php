@extends('layouts.base')

@section('content')
	<link rel="stylesheet" href="{{ mix('/css/login.css') }}">
	<login-component></login-component>
@endsection

@section('pageJs')
	<script src="{{ mix('js/login.js') }}"></script>
@endsection
