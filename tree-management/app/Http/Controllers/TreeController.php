<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tree;
use App\Models\StandTableGroup;
use App\Models\ProdTable;
use Illuminate\Support\Facades\DB;

class TreeController extends Controller
{
    public function generate()
    {
        // Move the logic from your generate() function here
    }

    public function getforest()
    {
        $trees = Tree::all();
        return response()->json(['success' => true, 'message' => $trees]);
    }

    public function getTree($id)
    {
        $tree = Tree::find($id);
        return response()->json(['success' => true, 'message' => $tree]);
    }

    public function getStandtableGroup()
    {
        $standtable = StandTableGroup::all();
        return response()->json(['success' => true, 'message' => $standtable]);
    }

    public function getProdtable()
    {
        $prodtable = ProdTable::all();
        return response()->json(['success' => true, 'message' => $prodtable]);
    }

    public function getTreesInBlock($blockX, $blockY)
    {
        $trees = Tree::where('BlockX', $blockX)->where('BlockY', $blockY)->get();
        return response()->json(['success' => true, 'message' => $trees]);
    }
}
