/*****  Naaach!  *****/

//only database and seffunctions¡
	/**** indexedDB  ****/


	//only database and self-functions¡
	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
	//create or open a DB
	 open = indexedDB.open("DataBase");


	//Schema
	open.onsuccess = function(){
		db = open.result;

	};

	open.onupgradeneeded = function (){
		//Transactions
		 db = open.result;
		 store = db.createObjectStore("Codigos", {keyPath: "tracking"});
		 tx = db.transaction("Codigos", "readwrite");
		 store = tx.objectStore("Codigos");

	 	//Close transaction
		tx.oncomplete = function() {
        	db.close();
        };
	};

	//agregar objeto
	newObject = function(){
		db = open.result;
		tx = db.transaction("Codigos", "readwrite");
		store = //tx.objectStore("Codigos");

		//add data
		store.add({tracking: trackingNumber, descripcion: descripcion, tienda: shop});


    };


	//Triggers
	formButton.addEventListener("click", newObject);

	//clean DB
	cleanObjectStorage = function(){
		tx = db.transaction("Codigos", "readwrite");
		objectStore = tx.objectStore("Codigos");

		objectStore.clear();


	};

	formButtonDel.addEventListener("click", cleanObjectStorage);
	/**** /indexedDB  ****/