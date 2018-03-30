var documento = $(document);
documento.ready(inicializar);

function inicializar() 
{
	
	var body = $('body');
	var cerrar = $("#close");
	var modal = $("#myModal");				//Obtengo el modal

	body.on('click', '#scrollingChat img', function() {

		//Este codigo se ejecuta cuando se hace clic sobre una imagen en el body
		var img_clickeada = $(this);			//Obtengo la imagen clickeada
		var img_modal = $("#img01");			//Obtengo la etiqueta img donde se va a mostrar la imagen clickeada	
		
		var captionText = $("#caption");
		

		//Asignamos los atributos de la imagen clickeada a la imagen que se va a mostrar
		img_modal.attr('src',  img_clickeada.attr('src')); //Se obtiene el atributo src de img_clickeada y 
					//se le pasa como parametro a img_modal
		img_modal.attr('alt', img_clickeada.attr('alt'));
		//captionText.attr('alt', img_clickeada.attr('alt'));
		captionText.html(img_clickeada.attr('alt'));
		modal.css('display', 'block');
		
	});
	
	cerrar.click(function(event) {
		
		modal.css('display', 'none');
	});
}




