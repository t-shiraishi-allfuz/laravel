<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Socialite;
use App\Models\GameUser;

// 認証コントローラー
class LoginController extends Controller
{
	use AuthenticatesUsers;

	protected $redirectTo = '/index';

	public function __construct()
	{
		$this->middleware('guest')->except('logout');
	}

	protected function guard()
	{
		return Auth::guard('game_user');
	}

	// 省略
	public function redirectToGoogle()
	{
		// Google へのリダイレクト
		return Socialite::driver('google')->redirect();
	}

	// Googleアカウントで認証
	public function handleGoogleCallback()
	{
		// Google 認証後の処理
		try {
			$gUser = Socialite::driver('google')->stateless()->user();
			// emailが合致するユーザーを取得
			$logic = new GameUser();
			$user = $logic->getUserEmail($gUser->email);
			// いなければ新規作成
			if ($user == null)
			{
				$user = $this->createUserByGoogle($gUser);
			}
			// ログイン
			Auth::login($user, true);

			// TOPへ
			return redirect('/index');
		} catch (Exception $e) {
			return redirect('/');
		}
	}

	// Googleアカウントでユーザー登録
	public function createUserByGoogle($gUser)
	{
		$logic = new GameUser();
		$user = $logic->create($gUser);
		return $user;
	}
}
