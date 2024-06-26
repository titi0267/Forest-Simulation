import React from "react";

const columns = [
    { name: "BlockX", uid: "BlockX", sortable: true },
    { name: "BlockY", uid: "BlockY", sortable: true },
    { name: "X", uid: "x", sortable: true },
    { name: "Y", uid: "y", sortable: true },
    { name: "RealX", uid: "RealX", sortable: true },
    { name: "RealY", uid: "RealY", sortable: true },
    { name: "TreeNum", uid: "TreeNum" },
    { name: "Species", uid: "species", sortable: true },
    { name: "Group", uid: "spgroup", sortable: true },
    { name: "Diameter", uid: "Diameter", sortable: true },
    { name: "Class", uid: "DiameterClass", sortable: true },
    { name: "Height", uid: "Height", sortable: true },
    { name: "Volume", uid: "Volume", sortable: true },
    { name: "Status", uid: "status", sortable: true },
    { name: "PROD", uid: "PROD", sortable: true },
    { name: "CutAngle", uid: "CutAngle", sortable: true },
    { name: "DamageSTEM", uid: "DamageSTEM", sortable: true },
    { name: "DamageCROWN", uid: "DamageCROWN", sortable: true },
    { name: "GrowthD30", uid: "GrowthD30", sortable: true },
    { name: "Volume30", uid: "Volume30", sortable: true },
    { name: "Actions", uid: "actions" },
];

const statusOptions = [
    { name: "Cut", uid: "Cut" },
    { name: "Keep", uid: "Keep" },
    { name: "Victim", uid: "Victim" },
    { name: "None", uid: "None" },
];

const diameterOptions = [
    { name: "45", uid: "45" },
    { name: "50", uid: "50" },
    { name: "55", uid: "55" },
    { name: "60", uid: "60" },
    { name: "65", uid: "65" },
];


export { columns, statusOptions, diameterOptions };
