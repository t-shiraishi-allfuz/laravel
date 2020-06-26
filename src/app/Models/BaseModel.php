<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{

	public function getCreatedAtAttribute($value)
	{
		return $this->asDateTime($value)->timezone("JST")->format('Y/m/d H:i');
	}

	public function getUpdatedAtAttribute($value)
	{
		return $this->asDateTime($value)->timezone("JST")->format('Y/m/d H:i');
	}

}
