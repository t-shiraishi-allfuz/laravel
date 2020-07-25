<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<link rel="stylesheet" href="{{ mix('/css/app.css') }}">

		<title>{{ config('app.name', 'Laravel') }}</title>
	</head>
	<body>
		<div class="main">
			<div id="app-container">
				<div id="wrapper">
					<header></header>
					<div id="contents">
						<div id="scroller">
							@yield('content')
						</div>
					</div>
					<footer></footer>
				</div>
			</div>
		</div>

		<script src="{{ mix('js/common.js') }}"></script>
		<script src="{{ mix('js/app.js') }}"></script>
		@yield('pageJs')
	</body>
</html>
