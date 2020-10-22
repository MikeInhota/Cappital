<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CriarTabelaUsers extends Migration
{

    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->tinyIncrements("id");
            $table->timestamps();
            $table->string("email")->unique();
            $table->string("password");
            $table->string("fstName");
            $table->string("lstName");
            $table->string("nickName");
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
