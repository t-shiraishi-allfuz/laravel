<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;

class GameUser extends BaseModel implements Authenticatable
{
	use AuthenticableTrait;

	protected $fillable = ['public_id', 'name', 'email', 'social_id', 'remember_token'];

	// 公開IDの文字数
	const PUBLIC_ID_NUM = 10;

	// ユーザー作成
	public function create($request)
	{
		// 公開ID生成
		$public_id = $this->setPublicId(self::PUBLIC_ID_NUM);
		// 保存
		$this->fill([
			'public_id'      => $public_id,
			'name'           => $request->name,
			'email'          => $request->email,
			'social_id'      => $request->getId(),
		])->save();

		return $this;
	}

	// ユーザー検索（social_id）
	public function getUserSociealId($socieal_id)
	{
		return self::where('social_id', $socieal_id)->first();
	}

	// ユーザー検索（email）
	public function getUserEmail($email)
	{
		return self::where('email', $email)->first();
	}

	// 公開ID生成
	public function setPublicID($rand_num = 8)
	{
		return str_random($rand_num);
	}
}
