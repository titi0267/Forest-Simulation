<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prod_tables', function (Blueprint $table) {
            $table->id();
            $table->float('Volume');
            $table->integer('Number');
            $table->integer('Production0');
            $table->float('Damage');
            $table->float('Growth30');
            $table->integer('Production30');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prod_tables');
    }
};
