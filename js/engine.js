/*****  Naaach!  *****/

(function(){

	//Variables
	//formulario
	formDescripcion = document.getElementById("itemDesc");
	formTracking = document.getElementById("trackingNumber");
	formShop = document.getElementById("shopList");
	formButton = document.getElementById("botonAgregar");
	formButtonDel = document.getElementById("botonBorrarDB");



	//Tabla de items
	var masterTableItems = document.getElementById("masterTableItems"); /*<tbody>*/
		removeButtons = document.getElementsByClassName("removeItemButton");

	//Funciones
/*
	validadorCampos = function(){
		formDescripcion = document.getElementById("itemDesc");
		formTracking = document.getElementById("trackingNumber");
		formShop = document.getElementById("shopList");

		descripcion = formDescripcion.value,
		trackingNumber = formTracking.value,
		shop = formShop.value;
		var valido = true;

		if(descripcion===" "){
			valido = false;
			formDescripcion.classList.add("alert-danger");
			formDescripcion.placeholder = "Falta Descripcion";
		}
		if(trackingNumber===" "){
			valido = false;
			trackingNumber.classList.add("alert-danger");
			trackingNumber.placeholder = "Falta Nº Tracking";
		}
		if((shop === "Selecciona Tienda") || (shop === " ")){
			valido = false;
			shop.classList.add("alert-danger");
		}

		if (valido){
			//limpieza de clases en campos
			formDescripcion.classList.remove("alert-danger");
			formTracking.classList.remove("alert-danger");
			formShop.classList.remove("alert-danger");

			//Nuvos placeholders
			formDescripcion.placeholder=" Descripcion";
			formTracking.placeholder="Nº Tracking";

			newElement();	//llamada a la creacion de un nuevo elemento
		}
	};
*/
	newElement = function(){
		descripcion = formDescripcion.value,
		trackingNumber = formTracking.value,
		shop = formShop.value;

		x=document.createTextNode("x");
		validadorDatos = true;

		//validador de datos
		if ((descripcion === "") || (trackingNumber === "") || ((shop === "Selecciona Tienda") || (shop === ""))) {
			if (descripcion==="") {validadorDatos=false;formDescripcion.classList.add("alert-danger");formDescripcion.placeholder="Falta Descripcion";}else{descripcionInfo="";}
			if (trackingNumber==="") {validadorDatos=false;formTracking.classList.add("alert-danger");formTracking.placeholder="Falta Nº Tracking";}else{trackingNumberInfo="";}
			if ((shop === "Selecciona Tienda") || (shop === "")) {validadorDatos=false;formShop.classList.add("alert-danger");}else{shopInfo="";}
			//validadorDatos
			if (validadorDatos === false) {return validadorDatos;}else{validadorDatos = true;}
		}

		if (validadorDatos) {
			formDescripcion.classList.remove("alert-danger");
			formTracking.classList.remove("alert-danger");
			formShop.classList.remove("alert-danger");

			formDescripcion.placeholder=" Descripcion";
			formTracking.placeholder="Nº Tracking";
		}

		//crear elementos de nueva fila
		item = document.createElement("tr");
		item.setAttribute("class", "item");
		//nueva descripccion
		tdDesc = document.createElement("td");
		tdDesc.setAttribute("class", "tdDesc");
		//nuevo Trcking
		tdNum = document.createElement("td");
		tdNum.setAttribute("class", "tdNum");
		//nuevo Tienda
		tdShop = document.createElement("td");
		tdShop.setAttribute("class", "tdShop");

		//boton removeItem
		botonRM = document.getElementsByClassName("removeItem");
		tdRM = botonRM[0];
		tdRMClone = tdRM.cloneNode(true);
		tdRMClone.className = "removeItem";

		//creacion de contenido
		descripcionNode = document.createTextNode(descripcion);
		trackingNumberNode = document.createTextNode(trackingNumber);
		shopNode = document.createTextNode(shop);

		//inyeccion de nodos
		//descripccion
		tdDesc.appendChild(descripcionNode);
		//TrackingNumber
		tdNum.appendChild(trackingNumberNode);
		//Shop
		tdShop.appendChild(shopNode);

		//creacion de la nueva fila (al fin...)
		//descripccion
		item.appendChild(tdDesc);
		//Tracking
		item.appendChild(tdNum);
		//Shop
		item.appendChild(tdShop);
		//removeButton
		item.appendChild(tdRMClone);
		//masterTableItems
		masterTableItems.appendChild(item);



		//limpiar inputs de formulario
		formDescripcion.value = "";
 		formTracking.value = "";
 		formShop.value = "Selecciona Tienda";

 		//Evento de borrado
		formButton.addEventListener("click", validadorCampos);	//nuevo Elemento

		for (var i = 0; i < removeButtons.length; i++) {
			removeButtons[i].addEventListener("click", removerItems);	//eliminar elemento
		}

	}

	//Borrar elemento
	 removerItems = function(){
		this.parentNode.parentNode.remove(this);
	}

	//Eventos
	formButton.addEventListener("click", newElement);	//nuevo Elemento
	for (var i = 0; i < removeButtons.length; i++) {
		removeButtons[i].addEventListener("click", removerItems);	//eliminar elemento
	}

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
}());
