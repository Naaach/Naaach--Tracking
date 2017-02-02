/*****  Naaach!  *****/

//(function(){

	//Variables
//	validadorDatos = true;

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

	validadorCampos = function(){
		formDescripcion = document.getElementById("itemDesc");
		formTracking = document.getElementById("trackingNumber");
		formShop = document.getElementById("shopList");

		descripcion = formDescripcion.value,
		trackingNumber = formTracking.value,
		shop = formShop.value;
		var valido = true;

		if(descripcion===""){
			valido = false;
			formDescripcion.classList.add("alert-danger");
			formDescripcion.placeholder = "Falta Descripcion";
		}else{
			formDescripcion.classList.remove("alert-danger");
			formDescripcion.placeholder=" Descripcion";
		}

		if(trackingNumber===""){
			valido = false;
			formTracking.classList.add("alert-danger");
			formTracking.placeholder = "Falta Nº Tracking";
		}else{
			formTracking.classList.remove("alert-danger");
			formTracking.placeholder="Nº Tracking";
		}

		if((shop === "Selecciona Tienda") || (shop === "")){
			valido = false;
			formShop.classList.add("alert-danger");
		}else{
			formShop.classList.remove("alert-danger");
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

	newElement = function(){

		descripcion = formDescripcion.value,
		trackingNumber = formTracking.value,
		shop = formShop.value;

		x=document.createTextNode("x");

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

		//borrado selectivo
		for (var i = 0; i < removeButtons.length; i++) {
			removeButtons[i].addEventListener("click", removerItems);	//eliminar elemento
		}
	}

	//Llamada al validador
	formButton.addEventListener("click", validadorCampos);	//& nuevo Elemento

	//Borrar elemento
	 removerItems = function(){
		this.parentNode.parentNode.remove(this);
	}

	//Eventos
//	formButton.addEventListener("click", newElement);	//nuevo Elemento
	for (var i = 0; i < removeButtons.length; i++) {
		removeButtons[i].addEventListener("click", removerItems);	//eliminar elemento
	}

	/**
	*DATABASE HERE!
	**/

//}());
