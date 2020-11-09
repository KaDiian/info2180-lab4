window.onload = function(){
    var search = document.getElementById("btn");
    search.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("click");

        var httpRequest = new XMLHttpRequest();
    
        var url = "http://localhost:8080/superheroes.php";
   
        httpRequest.onreadystatechange = function() {
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if(httpRequest.status === 200) {
                    var results = httpRequest.responseText;
                    alert(results);
            } else {
                alert("Error Coode");
                }
            }
        }
        httpRequest.open('GET', url, true);
        httpRequest.send();
    });
}