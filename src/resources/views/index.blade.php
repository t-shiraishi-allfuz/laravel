@extends('layouts.base')

@section('content')
	<link rel="stylesheet" href="{{ mix('/css/index.css') }}">
	<index-component></index-component>
@endsection

@section('pageJs')
	<script src="{{ mix('js/index.js') }}"></script>
@endsection
