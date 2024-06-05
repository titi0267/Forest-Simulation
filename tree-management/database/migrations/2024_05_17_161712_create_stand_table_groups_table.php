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
        Schema::create('stand_table_groups', function (Blueprint $table) {
            $table->id();
            $table->string('SpeciesGroup');
            $table->string('5-15');
            $table->string('15-30');
            $table->string('30-45');
            $table->string('45-60');
            $table->string('60+');
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
        Schema::dropIfExists('stand_table_groups');
    }
};
