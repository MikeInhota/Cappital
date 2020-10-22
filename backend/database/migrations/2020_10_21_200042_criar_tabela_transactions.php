<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CriarTabelaTransactions extends Migration
{
    
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->integer("id");
            $table->timestamps();
            $table->unsignedBigInteger('userId');
            $table->enum("type", ["debit", "credit"]);
            $table->float("amount", 8, 2);
            $table->string("title");
            $table->text("description");

            $table->foreign('userId')->references('id')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
