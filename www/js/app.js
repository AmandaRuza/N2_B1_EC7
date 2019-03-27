$(document).ready(function(){

    var shibeContainer = $('#resultAPI');
    
    var btnGetImg = $("#btnPesquisarAPI");
    btnGetImg.click(getNewImg);

    function getNewImg(e){
        var loadingText = 'Loading...';
        shibeContainer.html(loadingText);

        var radius = document.getElementsByName('typeAnimal');
        var retorno = null;
        
        for (var i = 0; i < 3 ; i++){
            if (radius[i].checked){
                retorno = radius[i].value;
            }
        
        }
        
        var corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
		var apiUrl = 'http://shibe.online/api/' + retorno + '?count=1';

        fetch(corsAnywhere + apiUrl)
        .then(response => {
            return response.json();
        }).then(data => {
            handleCheckSucess(data);
        }).catch(err => {
            handleError(err);
        });
    }

    function handleCheckSucess(response){
        var imageUrl = response[0];
        var shibeImg = '<img id="shibePhoto" src="'+imageUrl + '" style=width: 50%;height:  = 50%;min-height: 100px;">';
        shibeContainer.html(shibeImg);
              
        
    }

    function handleError(err){
        console.log("Error!!!");
    }
})