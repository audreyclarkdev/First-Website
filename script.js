  
  $(document).ready(function() {
    $(".icon").hover(function() {
        $(this).toggleClass("resize")
    });
});


function showRepositories(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let repoList = JSON.parse(this.responseText);
            document.getElementById("repositories").innerHTML = " ";
                for(var i = 0; i < this.responseText.length; i++){
                    let node = document.createElement("li");                
                    let textnode = document.createTextNode(repoList[i].name);         
                    node.appendChild(textnode);                              
                    document.getElementById("repositories").appendChild(node);
                }
        }
    };
    xhttp.open("GET", "https://api.github.com/users/amazonwarrior23/repos", true);
    xhttp.send();
}
    


