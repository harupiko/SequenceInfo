var sequence;

function setup()
{
//     createGenericButton(document.getElementById("showButton"), 
// 			"Show",
// 			showInfo);
    document.getElementById("sequence").focus();
    showInfo();
    return 0;
}

function docopy(event){
    alert('copy');
    event.clipboardData.setData("text/plain", sequence);
    event.preventDefault();
    event.stopPropagation();
}

function showInfo(){
    sequence = document.getElementById("sequence").value.toUpperCase();

    var A = 0;
    var T = 0;
    var G = 0;
    var C = 0;

    for(var i=0;i<sequence.length;i++){
	var base = sequence.charAt(i);
	if(base == "A") A++;
	if(base == "T") T++;
	if(base == "G") G++;
	if(base == "C") C++;
    }

    //Sequence Length
    document.getElementById("seqLength").innerHTML = (sequence.length).toString();

    //Base counts
    document.getElementById("countA").innerHTML = A.toString();
    document.getElementById("countT").innerHTML = T.toString();
    document.getElementById("countG").innerHTML = G.toString();
    document.getElementById("countC").innerHTML = C.toString();

    //GC percent
    if(sequence == ""){
	;
    } else {
	document.getElementById("GC").innerHTML = ((G+C)/sequence.length * 100).toString().substring(0,4);
    }

    //complemental sequence
    var direction = 1; //5'-3'
    if(document.getElementById("opt_complemental").checked){
	sequence = complementalSequence(sequence);
	direction = direction * -1;
    }
    if(document.getElementById("opt_reverse").checked){
	sequence = reverseSequence(sequence);
	direction = direction * -1;
    }
    if(	direction > 0){
	document.getElementById("result_prefix").innerHTML = "5'-";
	document.getElementById("result_suffix").innerHTML = "-3'";
    } else {
	document.getElementById("result_prefix").innerHTML = "3'-";
	document.getElementById("result_suffix").innerHTML = "-5'";
    }

    document.getElementById("result").innerHTML = sequence;

    return 0;
}

function reverseSequence(seq)
{
    var reverse = "";
    for(var i= seq.length - 1; i >= 0 ;i--){
	reverse += seq.charAt(i);
    }
    
    return reverse;
}
function complementalSequence(seq)
{
    var complemental = "";
    for(var i= 0; i < seq.length ;i++){
	var base = seq.charAt(i);
	if(base == "A") complemental += "T";
	if(base == "T") complemental += "A";
	if(base == "G") complemental += "C";
	if(base == "C") complemental += "G";
    }
    
    return complemental;
}


function getSequence(){
    return sequence;
}