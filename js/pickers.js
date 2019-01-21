// Variables

var intervalObj;

var elBox;
var elRow;
var childRow;
var wTotal;
var wBox
var newW;
var wInit
var W;

//Assign events
document.addEventListener("mouseup", mouseup);
document.addEventListener("mouseout", mouseup);

// Support Functions

function mouseup(e) {
	if(intervalObj) {  //Only stop if exists
		clearInterval(intervalObj);
	}
}

function readValue(name,pObj) {
	
	var spans = document.getElementsByName(name);
	var val = $("#" + name).val();
	
	if (val != "") {
		var delimiters = [];cnt=0;
		for (i = 0; i < pObj.length; i++) {
			if (pObj[i].delimiter != "") {
				delimiters[cnt] = pObj[i].delimiter;
				cnt++;
			}
		}
		
		if (delimiters != "") {
			var valArr = val.split(new RegExp(delimiters.join('|'), 'g'));
		} else {
			var valArr = [val];
		}
		
		for (i = 0; i < pObj.length; i++) {
			pObj[i].set = 1;
			pObj[i].value = parseInt(valArr[i]);
			$("#" + pObj[i].spanId).html(addLeadingZero(valArr[i],pObj[i].nChar));
			$("#" + pObj[i].spanId).css("color","#000");
		}
	}
}

function resizePickers(sgid,wInit) {
	
		 elBox    = $("#picker_" + sgid).parent();
	     elRow    = $("#picker_" + sgid + "_row");
	     childRow = elRow.children();
		
	     wTotal = wInit;
		 wBox   = elBox.width();
		var W = [];
		W[0] = wInit;
	    for (i = 1; i < childRow.length; i++) {
		  W[i] = childRow[i].offsetWidth;
	  	  wTotal= wTotal + childRow[i].offsetWidth;
	    }
	    wTotal = wTotal + 4*14; // add margin
		
		if (wTotal > wBox) {
		  var newW = wBox - wTotal + W[0] -1;
		  $(childRow[0]).css('width',newW);
		} else {
		  $(childRow[0]).css('width',W[0]);
		}
}

// The main function
function Pickers(sgid,P) {
	
	// Variables
    var pObj  = P.inputs;
    var spans = document.getElementsByName(sgid);
	var sgElement = $("#" + sgid);
	
	// Nested Functions
	
	function getNewPicker(idx) {
				
		html="<div class='dials'  id='picker_" + sgid + "_dials'>";
		html+="	 <span class='fa fa-angle-up' id='" + sgid + "_" + idx + "_up' name='changeValue' style='font-size:3em'></span><br>";
		html+="	 <span class='face' id='" + sgid + "_" + idx + "' name='" + sgid + "'>" + addLeadingZero(pObj[i].initValue,pObj[i].nChar) + "</span><br>";
		html+="	 <span class='fa fa-angle-down' id='" + sgid + "_" + idx + "_down' name='changeValue' style='font-size:3em'></span>";
		html+="</div>";
		if (pObj[i].label != undefined) {
			html+="<div class='labels' id='picker_" + sgid + "_delimiter'>";
			html+="	 " + pObj[i].label + "";
			html+="</div>";
		}
		return html;
	}

	// Main bit
	
	for (i = 0; i < P.N; i++) {
		pObj[i].value  = pObj[i].initValue;
		pObj[i].spanId = sgid + "_" + i;
		pObj[i].set    = 0;
		
		pObj[i].changeValue = function(direction) {
			if (this.set == 1) {
				if (direction == "up") {
					this.value = this.value + this.step;
				} else {
					this.value = this.value - this.step;
				}
				
				if (this.value < this.minValue) {
					this.value = this.maxValue;
				}
				if (this.value > this.maxValue) {
					this.value = this.minValue;
				}
			}
			this.set = 1;
			// Change the value in the span-element
			$("#" + this.spanId).html(addLeadingZero(this.value,this.nChar));
			$("#" + this.spanId).css("color","#000");
			
			// Change the value in the SG-input
			var str = ""
			var nset = 0;
			for (j = 0; j < pObj.length; j++) {
				str += addLeadingZero(pObj[j].value,pObj[j].nChar) + pObj[j].delimiter;
				nset = nset + pObj[j].set;
			}
						
            // If all elements have been set, update the SG-element
			if (nset === pObj.length) {
                sgElement.val(str);
			}
		}
	}
		
	var tp;
	tp="<div class='container' id='picker_" + sgid + "' style='width:100%;'>";
	tp+="  <div class='row' id='picker_" + sgid + "_row'>";
	tp+="    <div class='labels' id='picker_" + sgid + "_prelabel'>";
	tp+="	   " + P.pre + "";
	tp+="    </div>";
	for (i = 0; i < P.N; i++) {
		tp+=getNewPicker(i);
	}
	tp+="    <div class='labels' id='picker_" + sgid + "_postlabel'>";
	tp+="	   " + P.post + "";
	tp+="    </div>";
	tp+="  </div>";
	tp+="</div>";
	
	var pnt = $('#' + sgid);//.parent(this);
    pnt.after(tp);
    $('#' + sgid).css("height","0px");
    $('#' + sgid).css("margin","0px");
    $('#' + sgid).css("padding","0px");
    $('#' + sgid).css("border","none");
    $('#' + sgid + "_prelabel").css("display","none");
    $('#' + sgid + "_postlabel").css("display","none");
	//pnt.css("display","none");
	//pnt.css("height","0px");
	//pnt.css("width","0px");
	//pnt.css("overflow","hidden");
	
	$(document).ready(function() {
		
		// set the size of the elements
	    var elRow    = $("#picker_" + sgid + "_row");
		var childRow = elRow.children();
		var wInit    = childRow[0].offsetWidth;
		resizePickers(sgid,wInit);

		// Read the values of the hidden input if this was already set
		// Needed in case someone clicked back.
		readValue(sgid,pObj);
		
		// Get the element, add a click listener...
		document.getElementById("picker_" + sgid).addEventListener("mousedown", function(e) {
			
			if(e.target && e.target.attributes.name && e.target.attributes.name.value == "changeValue") {
				
				info = e.target.id.split("_");
				
				idx = parseInt(info[2]);
				pObj[idx].changeValue(info[3])
				intervalObj = setInterval(function(){ 
					pObj[idx].changeValue(info[3]);
				}, 300);
				
			}
		});
		
		$(window).resize(function() {
			clearTimeout(window.resizedFinished);
			window.resizedFinished = setTimeout(function(){
				resizePickers(sgid,wInit);
			}, 250);
		});

	});
	
}