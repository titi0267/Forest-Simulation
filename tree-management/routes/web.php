<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TreeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/tree/generateforest', [TreeController::class, 'generate']);
Route::get('/tree/getforest', [TreeController::class, 'getforest']);
Route::get('/tree/getTree/{id}', [TreeController::class, 'getTree']);
Route::get('/tree/getStandtableGroup', [TreeController::class, 'getStandtableGroup']);
Route::get('/tree/getProdtable', [TreeController::class, 'getProdtable']);
Route::get('/tree/getTreesInBlock/{blockX}/{blockY}', [TreeController::class, 'getTreesInBlock']);
