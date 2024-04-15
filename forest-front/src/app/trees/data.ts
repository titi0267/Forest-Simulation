import React from "react";

const columns = [
    { name: "BlockX", uid: "BlockX", sortable: true },
    { name: "BlockY", uid: "BlockY", sortable: true },
    { name: "X", uid: "x", sortable: true },
    { name: "Y", uid: "y", sortable: true },
    { name: "TreeNum", uid: "TreeNum" },
    { name: "Species", uid: "species", sortable: true },
    { name: "Group", uid: "spgroup", sortable: true },
    { name: "Diameter", uid: "Diameter", sortable: true },
    { name: "Class", uid: "DiameterClass", sortable: true },
    { name: "Height", uid: "Height", sortable: true },
    { name: "Volume", uid: "Volume", sortable: true },
    { name: "Status", uid: "status", sortable: true },
    { name: "Actions", uid: "actions" },
];

const statusOptions = [
    { name: "Cut", uid: "cut" },
    { name: "Keep", uid: "keep" },
];

export { columns, statusOptions };
