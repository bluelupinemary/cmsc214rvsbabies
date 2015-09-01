/**

Javascript functions for ToyBox.

Comment: Needs to be cleaned. Some variables/functions no longer in use.

Last edit: May 12, 2015

**/

// Arrays for saving the variables and main code
var varlist = [];
var funclist = [];
var codemain = [];
var functs = [];

// Variables used for element id creation
var index = 0;
var varid = 0;
var hoindex = 0;
var hcindex = 0;
var hexprf = 0;
var opareidx = 0;
var cpareidx = 0;
var exclidx = 0;
var index2 = 0;
var mboindex = 0;
var mbcindex = 0;
var alnum = 0;
var findex = 0;


function showTabs(tab) {
	
	// Tabs for the main menu
	var ddtab = document.getElementById('panel1');
	var scripttab = document.getElementById('panel2');
	var resultstab = document.getElementById('panel3');

	// Tabs for Drag&Drop selection menu
	var variables = document.getElementById('variables');
	var operations = document.getElementById('operations');
	var operators = document.getElementById('operators');
	var others = document.getElementById('others');

	
	switch(tab) {
		case "variablesTab":
			variables.style.display = 'block';
			operations.style.display = 'none';
			operators.style.display = 'none';
			others.style.display = 'none';

			$('#varButton').css('background-color','#E5FFCC');
			$('#varButton').css('color','#254117');

			$('#operationsButton').css('background-color','#4E9258');
			$('#operationsButton').css('color','#FAFAFA');
	
			$('#operatorsButton').css('background-color','#4E9258');
			$('#operatorsButton').css('color','#FAFAFA');
	
			$('#othersButton').css('background-color','#4E9258');
			$('#othersButton').css('color','#FAFAFA');
			
			break;
		case "operationsTab":
			variables.style.display = 'none';
			operations.style.display = 'block';
			operators.style.display = 'none';
			others.style.display = 'none';

			$('#operationsButton').css('background-color','#E5FFCC');
			$('#operationsButton').css('color','#254117');

			$('#varButton').css('background-color','#4E9258');
			$('#varButton').css('color','#FAFAFA');

			$('#operatorsButton').css('background-color','#4E9258');
			$('#operatorsButton').css('color','#FAFAFA');

			$('#othersButton').css('background-color','#4E9258');
			$('#othersButton').css('color','#FAFAFA');
	
			break;
		case "operatorsTab":
			variables.style.display = 'none';
			operations.style.display = 'none';
			operators.style.display = 'block';
			others.style.display = 'none';


			$('#operatorsButton').css('background-color','#E5FFCC');
			$('#operatorsButton').css('color','#254117');

			$('#varButton').css('background-color','#4E9258');
			$('#varButton').css('color','#FAFAFA');	

			$('#operationsButton').css('background-color','#4E9258');
			$('#operationsButton').css('color','#FAFAFA');	

			$('#othersButton').css('background-color','#4E9258');
			$('#othersButton').css('color','#FAFAFA');

			break;
		case "othersTab":
			variables.style.display = 'none';
			operations.style.display = 'none';
			operators.style.display = 'none';
			others.style.display = 'block';


			$('#othersButton').css('background-color','#E5FFCC');
			$('#othersButton').css('color','#254117');

			$('#varButton').css('background-color','#4E9258');
			$('#varButton').css('color','#FAFAFA');	

			$('#operationsButton').css('background-color','#4E9258');
			$('#operationsButton').css('color','#FAFAFA');	

			$('#operatorsButton').css('background-color','#4E9258');
			$('#operatorsButton').css('color','#FAFAFA');

			break;
		case "ddTab":
			ddtab.style.display = 'block';
			scripttab.style.display = 'none';
			resultstab.style.display = 'none';

			$('#ddButton').css('background-color','#E5FFCC');
			$('#ddButton').css('color','#254117');

			$('#scriptButton').css('background-color','#4E9258');
			$('#scriptButton').css('color','#FAFAFA');
	
			$('#resultsButton').css('background-color','#4E9258');
			$('#resultsButton').css('color','#FAFAFA');
			
			break;
		case "scriptTab":
			ddtab.style.display = 'none';
			scripttab.style.display = 'block';
			resultstab.style.display = 'none';

			$('#scriptButton').css('background-color','#E5FFCC');
			$('#scriptButton').css('color','#254117');

			$('#ddButton').css('background-color','#4E9258');
			$('#ddButton').css('color','#FAFAFA');
	
			$('#resultsButton').css('background-color','#4E9258');
			$('#resultsButton').css('color','#FAFAFA');
		
			break;		
	 	case "resultsTab":
			ddtab.style.display = 'none';
			scripttab.style.display = 'none';
			resultstab.style.display = 'block';

			$('#resultsButton').css('background-color','#E5FFCC');
			$('#resultsButton').css('color','#254117');

			$('#scriptButton').css('background-color','#4E9258');
			$('#scriptButton').css('color','#FAFAFA');
	
			$('#ddButton').css('background-color','#4E9258');
			$('#ddButton').css('color','#FAFAFA');

			break;
		default:
			alert("Hey there!");

	}
}

function getPosition(el) {
	return el.position();
}

function findPosition(str,arr,ID) {
	var pos;	
	for (var i = 0; i < arr.length; ++i) {
	    if (arr[i].search(ID) != -1) {
		pos = i;
		break;
	    }
	}
	
	return pos;
}

function getVarData() {
	var variable = document.getElementById(this.id);
	varValue = variable.value;
	
	temp = this.id + "_ ";
	var targetID;

	if(variable.parentNode.id=="varDeclaration") {
		targetID = "vardec";

		var arrPos = findPosition(temp,varlist,this.id);
		

		varData = this.id + "_" + varValue;

		varlist[arrPos] = varData;
		document.getElementById(targetID).value=varlist;
	}
	else if(variable.parentNode.id=="funcDeclaration") {
		targetID = "funcdec";
		
		var arrPos = findPosition(temp,funclist,this.id);
		
		varData = this.id + "_" + varValue;

		funclist[arrPos] = varData;
		document.getElementById(targetID).value=funclist;

	}
	else if(variable.parentNode.id=="mainCode") {
		targetID = "maincode";

		varData = this.id + "_" + varValue;
		
		var arrPos = findPosition(temp,codemain,this.id);
		
		codemain[arrPos] = varData;
		document.getElementById(targetID).value=codemain;
	}
	else if(variable.parentNode.id=="funcSection") {
		targetID = "functsection";

		varData = this.id + "_" + varValue;
		
		var arrPos = findPosition(temp,functs,this.id);
		
		functs[arrPos] = varData;
		document.getElementById(targetID).value=functs;
	}
	
	
	//rducky_var<id>_<value>
	/**
	if(res[0] == "letters" || res[0] == "numbers") {
		varData = this.id + "_" + varValue;
		var arrPos = codemain.indexOf(temp);
		
		codemain[arrPos] = varData;
		document.getElementById(targetID).value=varlist;
	}
	else if (varValue) {
		varData = this.id + "_" + varValue;
		var arrPos = varlist.indexOf(temp);
		
		varlist[arrPos] = varData;
		document.getElementById(targetID).value=varlist;
	}
	**/
}

function getVarVal() {
	var item = document.getElementById(this.id);
		
	var pos = getPosition($(item));

	var imgID = this.id;

	var res = imgID.split("_");

	var varType = res[0];
	

	var currImgID = res[1];

	varid = res[1];
	if (item.dataset.clicked == 0) {
		item.dataset.clicked = 1;
		var varVal = document.createElement("textarea");
		
		//var1
		if(res[2]) {
			varName = "varf" + varid;
		}
		else {
			varName = "var" + varid;
		}

		varInfo = varType + "_" + varName;
		varVal.id = varInfo;
		

		//rducky_var1
		varVal.className = "vartext";

		varVal.style.position = "absolute";
		varVal.style.left = pos.left;
		varVal.style.top = pos.top+60;

		varVal.addEventListener('blur',getVarData);

		item.parentNode.appendChild(varVal);
	}	
}

function allowDrop(ev)
	{
		ev.preventDefault();
		
	}

function drag(ev)
	{
		ev.dataTransfer.setData("Text",ev.target.id);
		
	}

function drop(ev) {
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");

	var container = ev.target.id;

	var copyimg = document.createElement("img");
	var original = document.getElementById(data);
	copyimg.src = original.src;

	if(data=="rducky" || data=="numblk" || data=="letblk" || data=="mbox") { 

		if(container=="varDeclaration") {
			/**
				Dapat on drop, gumawa na sya ng default na variable name and id. Tapos kapag kinilick sya, retained dapat yung variable name at vartype.
			**/
			index++;
			// ID: rducky_1
			copyimg.id = data+"_"+index;
		
			varName = "var" + index;
			copyimg.title = varName;

			//rducky_var1
			varInfo = data + "_" + varName + "_ ";
			varlist.push(varInfo);
			document.getElementById('vardec').value = varlist;	
		}
		else if(container=="funcDeclaration") {
			findex++;
			// ID: rducky_1
			copyimg.id = data+"_"+findex+"_f";
			
			varName = "varf" + findex;
			copyimg.title = varName;

			//rducky_var1
			varInfo = data + "_" + varName + "_ ";
			funclist.push(varInfo);
			document.getElementById('funcdec').value = funclist;	
		}

		copyimg.dataset.clicked = 0;
		copyimg.style.position = "relative";

		copyimg.addEventListener('click',getVarVal);
		copyimg.addEventListener('dragstart',drag);

		ev.target.appendChild(copyimg);

	}
	else if (container=="mainCode") {
		
		copyimg.addEventListener('dragstart',drag);
		if (data =="ppopen" || data =="ppclose" || data =="returnpm") {}
		else if(data=="hoola") {
			++hoindex;
			copyimg.id = data + "_" + hoindex;
			
			
			codemain.push(copyimg.id);
			
			document.getElementById('maincode').value = codemain;

			ev.target.appendChild(copyimg);
		}
		else if(data=="hoop") {
			hcindex = hoindex;
			copyimg.id = data + "_" + hcindex;
			

			codemain.push(copyimg.id);
			document.getElementById('maincode').value = codemain;
			ev.target.appendChild(copyimg);
		}
		else if(data=="opare") {
			opareidx++;
			copyimg.id = data + "_" + opareidx;
			
			codemain.push("opare");
			document.getElementById('maincode').value = codemain;
			ev.target.appendChild(copyimg);
		}
		else if(data=="cpare") {
			cpareidx++;
			copyimg.id = data + "_" + cpareidx;
			
			codemain.push("cpare");
			document.getElementById('maincode').value = codemain;
			ev.target.appendChild(copyimg);
		}
		else if(data=="exclpt") {
			exclidx++;
			copyimg.id = data + "_" + exclidx;
			
			codemain.push("exclpt");
			document.getElementById('maincode').value = codemain;
			ev.target.appendChild(copyimg);
		}
		else if(data=="lthop" || data=="gtop" || data=="lteop" || data=="gteop" || data=="equop" || data=="neqop" || data=="plusop" || data=="minusop" || data=="multop" || data=="divop" || data=="andop" || data=="orop" || data=="notop" || data=="asop" || data=="starhole" || data=="squarehole" || data=="circlehole" || data=="mbopen" || data=="semicolon" || data=="mbclose" || data=="findpm" || data=="collect" || data=="give" || data=="show" || data=="pound" || data=="comma") {
			
			index2++;
			copyimg.id = data + "_" + index2;
			
			
			codemain.push(data);
			
			document.getElementById('maincode').value = codemain;
			ev.target.appendChild(copyimg);
		}
		else if(data=="letters" || data=="numbers") {
			alnum++;
			copyimg.id = data + "_" + alnum;
			copyimg.dataset.clicked = 0;
			copyimg.style.position = "relative";

			copyimg.addEventListener('click',getVarVal);

		
			varName = "var" + alnum;

			
			varInfo = data + "_" + varName + "_ ";
			codemain.push(varInfo);
			document.getElementById('maincode').value =codemain;

			ev.target.appendChild(copyimg);
		
		}
		else {
			var orID = "main_" + data;
			copyimg.id = orID;
		
			var res = data.split("_");
			var varName = "var"+res[1];

			copyimg.title = varName;

			codemain.push(varName);
			document.getElementById('maincode').value = codemain;
			ev.target.appendChild(copyimg);
		}
		
	}
	else if (container=="funcSection") {
		
		copyimg.addEventListener('dragstart',drag);
		if(data=="hoola") {
			++hoindex;
			copyimg.id = data + "_" + hoindex;
			
			
			functs.push(copyimg.id);
			
			document.getElementById('functsection').value = functs;
			

			
		}
		else if(data=="hoop") {
			hcindex = hoindex;
			copyimg.id = data + "_" + hcindex;
			

			functs.push(copyimg.id);
			document.getElementById('functsection').value = functs;
			
		}
		else if(data=="opare") {
			opareidx++;
			copyimg.id = data + "_" + opareidx;
			
			functs.push("opare");
			document.getElementById('functsection').value = functs;
		}
		else if(data=="cpare") {
			cpareidx++;
			copyimg.id = data + "_" + cpareidx;
			
			functs.push("cpare");
			document.getElementById('functsection').value = functs;
		}
		else if(data=="exclpt") {
			exclidx++;
			copyimg.id = data + "_" + exclidx;
			
			functs.push("exclpt");
			document.getElementById('functsection').value = functs;
		}
		else if(data=="lthop" || data=="gtop" || data=="lteop" || data=="gteop" || data=="equop" || data=="neqop" || data=="plusop" || data=="minusop" || data=="multop" || data=="divop" || data=="andop" || data=="orop" || data=="notop" || data=="asop" || data=="starhole" || data=="squarehole" || data=="circlehole" || data=="mbopen" || data=="semicolon" || data=="mbclose" || data=="ppopen" || data=="ppclose" || data=="findpm" || data=="returnpm" || data=="collect" || data=="give" || data=="show" || data=="pound" || data=="comma") {
			index2++;
			copyimg.id = data + "_" + index2;
			
			functs.push(data);
			
			document.getElementById('functsection').value = functs;
		}
		else if(data=="letters" || data=="numbers") {
			alnum++;
			copyimg.id = data + "_" + alnum;
			copyimg.dataset.clicked = 0;
			copyimg.style.position = "relative";

			copyimg.addEventListener('click',getVarVal);

		
			varName = "var" + alnum;

			
			varInfo = data + "_" + varName + "_ ";
			functs.push(varInfo);
			document.getElementById('functsection').value = functs;

			ev.target.appendChild(copyimg);
		
		}
		else {
			
			var orID = "func_" + data;
			copyimg.id = orID;
			
			var res = data.split("_");
			var varName = "varf"+res[1];

			copyimg.title = varName;
			functs.push(varName);
			document.getElementById('functsection').value = functs;		
		}
		
		ev.target.appendChild(copyimg);
	}
	else if (container=="emptytoybox") {
		
		var image = document.getElementById(data);
		var varInfo;
		var res = data.split("_");
		if(res[0] == "main" || res[0] == "func") {
			//Image is a var in main
			var varName = "var"+res[1];
			varInfo = document.getElementById(data);

			
			var token = "var" + res[2];
			if (res[0] == "main") {
				var arrPos = codemain.indexOf(token);
				codemain[arrPos] = ""
			
				document.getElementById('maincode').value = codemain;

			}
			else {
				var arrPos = functs.indexOf(token);
				functs[arrPos] = ""
			
				document.getElementById('functsection').value = functs;
			}

		}
		else if(res[0] == "rducky" || res[0] == "numblk" || res[0] == "letblk" || res[0] == "jrope" || res[0] == "mbox") {
					
			var varName = res[0] + "_var" + res[1];
			
			varInfo = document.getElementById(varName);
			if(varInfo) {
				var token = varName + "_" + varInfo.value;
			}
			else {
				var token = varName + "_" + " ";
			}
			var arrPos = varlist.indexOf(token);
			varlist[arrPos] = "";
			
			document.getElementById('vardec').value = varlist;

			var tempId = "tmpval" + res[1];
			var tmpVal = document.getElementById(tempId);
			if(tmpVal) {
				tmpVal.parentNode.removeChild(tmpVal);
			}
			
		}
		else {
			var token = data;
			var arrPos = codemain.indexOf(token);
			
			codemain[arrPos] = " ";
			
			document.getElementById('maincode').value = codemain;

		}
	
		image.parentNode.removeChild(image);
		if(varInfo) {
			varInfo.parentNode.removeChild(varInfo);
		}	
		
	}
}

function processForm()
{

var xmlhttpRequest;
if (window.XMLHttpRequest)
  {
  xmlhttpRequest=new XMLHttpRequest(); // IE7+, Firefox, Chrome, Opera, Safari
  }
else
  {
  xmlhttpRequest=new ActiveXObject("Microsoft.XMLHTTP"); // code for IE6, IE5
  }
xmlhttpRequest.onreadystatechange=function()
  {
  if (xmlhttpRequest.readyState==4 && xmlhttpRequest.status==200)
    {
    var serverResponse = xmlhttpRequest.responseText;
    document.getElementById("query_input").value=serverResponse;
    }
  }

var vardecVal = encodeURIComponent(document.getElementById("vardec").value);
var mainVal = encodeURIComponent(document.getElementById("maincode").value);
var funcVal = encodeURIComponent(document.getElementById("functsection").value);
var funcdecVal = encodeURIComponent(document.getElementById("funcdec").value);
var params = "vardec="+vardecVal+"&maincode="+mainVal+"&functsection="+funcVal+"&funcdec="+funcdecVal;

xmlhttpRequest.open("POST","processForm.php",true);
xmlhttpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttpRequest.send(params);
}

function processCode() {
	
	var xmlhttpRequest;
	if (window.XMLHttpRequest)
	  {
	  	xmlhttpRequest=new XMLHttpRequest(); // IE7+, Firefox, Chrome, Opera, Safari
	  }
	else
	  {
	 	 xmlhttpRequest=new ActiveXObject("Microsoft.XMLHTTP"); // IE6, IE5
	  }
	xmlhttpRequest.onreadystatechange=function()
	  {
	  
	  if (xmlhttpRequest.readyState==4 && xmlhttpRequest.status==200)
	    {
		    var serverResponse = xmlhttpRequest.responseText;
		    document.getElementById("panel3").innerHTML=serverResponse;
	    }
	  }

	var code = encodeURIComponent(document.getElementById('query_input').value);
	var params = "query_input="+code;
	
	xmlhttpRequest.open("POST","processCode.php",true);
	xmlhttpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttpRequest.send(params);

}

function clearEditor() {
 	document.editor.reset();
}
