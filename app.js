window.onload = function(){
    var search = document.getElementById("btn");
    var inputfield = document.getElementById("enter");
    var result = document.getElementById("results");
    search.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("click");

        var httpRequest = new XMLHttpRequest();
    
        var url = "http://localhost:8080/superheroes.php";
        var data = inputfield.value;
        var exec = '?q=' + data;
   
        httpRequest.onreadystatechange = function() {
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if(httpRequest.status === 200) {
                    var results = httpRequest.responseText;
                    result.innerHTML = results;
            } else {
                alert("Error Coode");
                }
            }
        }
        httpRequest.open('GET', url+exec, true);
        httpRequest.send();
    });
}