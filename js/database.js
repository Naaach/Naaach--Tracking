/*****  Naaach!  *****/

//only database and seffunctions¡

//create or open a DB
var open = indexedDB.open("DB", 1);

//Schema
open.onupgradeneeded = function(){
	var db = open.result;
	var store = db.createObjectStore("Codigos", {keyPath: "tracking"});

};

open.onsuccess = function (){
	//Transactions
	var db = open.result;
	var tx = db.transaction("Codigos", "readwrite");
	var store = tx.objectStore("Codigos");

	//add some data 
	store.put({tracking: trackingNumber, descipccion: descripcion, tienda: shop});

};
