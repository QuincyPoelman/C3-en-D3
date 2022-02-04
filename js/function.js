
    function reactie_weergeven(naam, opmerking) {

        var voornaamveld = document.getElementById('voornaam_veld').value;
        var textveld = document.getElementById('text_veld').value;

        if(voornaamveld != "" && voornaamveld != " " && textveld != "" && textveld != " " ) {
            document.getElementById("reactie_pagina").innerHTML += "<div class=\"row\" style=\"display: flex; justify-content: center;\"> <div class=\"card\" style=\"width: 40rem;\" ><div class=\"card-body\"><h5 class=\"card-title\">"+voornaamveld+"</h5><p class=\"card-text\">"+textveld+"</p></div></div> </div></br>";
        }
    
    
    }



    // 