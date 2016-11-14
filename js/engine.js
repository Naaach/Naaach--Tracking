/*****  Naaach!  *****/

(function(){

	//Variables
	//formulario
	var formDescripcion = document.getElementById("itemDesc"),
		formTracking = document.getElementById("trackingNumber"),
		formShop = document.getElementById("shopList"),
		formButton = document.getElementById("botonAgregar");
		

	//Tabla de items
	var masterTableItems = document.getElementById("masterTableItems"); /*<tbody>*/
		removeButtons = document.getElementsByClassName("removeItemButton");

	//Funciones
	newElement = function(){
		var descripcion = formDescripcion.value,
			trackingNumber = formTracking.value,
			shop = formShop.value;
		var x=document.createTextNode("X");

		//validador de datos
		if ((descripcion === "") || (trackingNumber === "") || ((shop === "Selecciona Tienda") || (shop === ""))) {
			if (descripcion==="") {validadorDatos=false;formDescripcion.classList.add("alert-danger");formDescripcion.placeholder="Falta Descripcion";}else{descripcionInfo="";}
			if (trackingNumber==="") {validadorDatos=false;formTracking.classList.add("alert-danger");formTracking.placeholder="Falta Nº Tracking";}else{trackingNumberInfo="";}
			if ((shop === "Selecciona Tienda") || (shop === "")) {validadorDatos=false;formShop.classList.add("alert-danger");}else{shopInfo="";}
			//validadorDatos
			if (validadorDatos === false) {return validadorDatos;}
		}
		if (validadorDatos = true) {
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
		formButton.addEventListener("click", newElement);	//nuevo Elemento

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


}());