
function hide() {

	document.getElementById("noBooks").innerHTML = "";
	document.getElementById("ispisKnjige").innerHTML = "";
	document.getElementById("jeftinije").innerHTML = "";
	document.getElementById("unos").value = "";
	document.getElementById("cijena").value = "";
}

function wondering() {

	var xmlI = new XMLHttpRequest();
	xmlI.open("GET", "books.xml", false);
	xmlI.send();
	xmlDOC = xmlI.responseXML;

		knjigice = xmlDOC.getElementsByTagName("knjiga");
		brojac = 0;
		ispis = "";
		for(i = 0; i<knjigice.length; i++)
		{
			brojac++;
			ispis = "<h2>" + brojac + "</h2>";
		}
		document.getElementById("noBooks").innerHTML = ispis;

}

function xml() {

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "books.xml", false);
		xmlhttp.send();
		xmlDoc = xmlhttp.responseXML;

		knjigice = xmlDoc.getElementsByTagName("knjiga");
		/*brojac = 0;
		ispis = "";
		for(i = 0; i<knjigice.length; i++)
		{
			brojac++;
			ispis += "<a href='" + knjigice[i].childNodes[0].nodeValue + "'>" 
			+ knjigice[i].childNodes[0].nodeValue + "</a>";
			//ispis += "<br/>";
			//ispis = brojac;
		}
		document.getElementById("lista").innerHTML = ispis;*/

		ispis2 = "";
		vrstaKnjiga = xmlDoc.getElementsByTagName("type");
		for(x = 0; x<knjigice.length; x++)
		{
			ispis2 += "<a name='" + knjigice[x].childNodes[0].nodeValue + "'>" +
			knjigice[x].childNodes[0].nodeValue + "</a>";

			sadIdu = vrstaKnjiga[x].getElementsByTagName("book");
			ispis2 += "<p>" + sadIdu[0].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</p>";
			ispis2 += "<p>" + sadIdu[0].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</p>";
		}



		document.getElementById("nazivi").innerHTML = ispis2;

	}

	function trazi() {

		var httpV = new XMLHttpRequest();
		httpV.open("GET", "books.xml", false);
		httpV.send();
		xmlDoc2 = httpV.responseXML;

		unos = document.getElementById("unos").value;

		bookis = xmlDoc2.getElementsByTagName("book");
		ispis3 = "";
		for(i = 0; i<bookis.length; i++)
		{
			if(bookis[i].getElementsByTagName("title")[0].childNodes[0].nodeValue[0] === unos[0].toUpperCase()) 
			{
				ispis3 += "<p> Name : " + bookis[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</p>";
				ispis3 += "<p> Author : " + bookis[i].getElementsByTagName("author")[0].childNodes[0].nodeValue + "</p>";
				
			}
		}
		document.getElementById("ispisKnjige").innerHTML = ispis3;
	}

	function provjeraCijene() {

		var httpO = new XMLHttpRequest();
		httpO.open("GET", "books.xml", false);
		httpO.send();
		xmlDoc3 = httpO.responseXML;

		cijenica = parseFloat(document.getElementById("cijena").value);
		ispis4 = "";

		prices = xmlDoc3.getElementsByTagName("book");
		document.getElementById("jeftinije").innerHTML = "";
		for(a = 0; a<prices.length; a++)
		{
			if(parseFloat(prices[a].getElementsByTagName("price")[0].childNodes[0].nodeValue) < cijenica)
			{
				ispis4 += "<p>" + "Name : " + prices[a].getElementsByTagName("title")[0].childNodes[0].nodeValue + 
				"</p>";
				ispis4 += "<p>" + "Price : " + prices[a].getElementsByTagName("price")[0].childNodes[0].nodeValue +
				"</p>";
			}
		}
		document.getElementById("jeftinije").innerHTML = ispis4;

	}