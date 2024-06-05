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
        Schema::create('trees', function (Blueprint $table) {
            $table->id();
            $table->integer('BlockX');
            $table->integer('BlockY');
            $table->integer('x');
            $table->integer('y');
            $table->integer('RealX');
            $table->integer('RealY');
            $table->string('TreeNum');
            $table->string('species');
            $table->string('spgroup');
            $table->float('Diameter');
            $table->string('DiameterClass');
            $table->float('Height');
            $table->float('Volume');
            $table->string('status');
            $table->float('PROD');
            $table->float('CutAngle');
            $table->float('DamageSTEM');
            $table->float('DamageCROWN');
            $table->float('GrowthD30');
            $table->float('Volume30');    
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
        Schema::dropIfExists('trees');
    }
};
