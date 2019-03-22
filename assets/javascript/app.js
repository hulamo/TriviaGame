
    $(document).ready(function() {



        var tiempoc=0;
        var segundos =0;
        var minutos=0;
        var calificacion=0;
        var buenas = 0;
        var malas = 0;
        
        function calificar() {
                clearInterval(interval);
        
        var palabram = " malas "
        var palabrab = " buenas "
        
        var calificaciont = "Tu Calificacion: ";
        
        if ($('input:radio[name=respuesta1]')[0].checked ==true)
        buenas= buenas +1;
        else
        malas= malas+1;
        
        if ($('input:radio[name=respuesta2]')[3].checked ==true)
        buenas= buenas +1;
        else
        malas= malas+1;
        
        if ($('input:radio[name=respuesta3]')[3].checked ==true)
        buenas= buenas +1;
        else
        malas= malas+1;
        
        if ($('input:radio[name=respuesta4]')[1].checked ==true)
        buenas= buenas +1;
        else
        malas= malas+1;
        
        if (malas === 1)
        palabram = " mala ";
        if (buenas === 1)
        palabrab = " buena ";
        
        alert ("Tuviste; " + buenas + palabrab + " y " + malas + palabram);
        
        
        }
        
        
        $("#btn1").on("click" ,function(){
        
        calificar();
        
        })
        
        
        function contador() {
        
            segundost="";
            minutost="";
        textotiempo="";
        
        
        tiempoc= tiempoc +1
        
        if( tiempoc >= 30) {
        
        calificar();
        
        }
        
        segundos = segundos +1;
        
        if (segundos === 60) {
        minutos = minutos +1;
        segundos = 0;
        }
        
        if (segundos < 10) {
        segundost = "0" + segundos.toString();
        console.log("hugo");
        }
        else {
        segundost = segundos.toString();
        console.log("segundos>10")
        
        }
        if (minutos < 10) {
        minutost = "0" +minutos.toString();
        console.log("minutos<10")
        
        }
        else
        {
        minutost = minutos.toString();
        }
        textotiempo = minutost + ":" + segundost;
        
        
        
        
        
        $("#tiempo").text(textotiempo);
        console.log(textotiempo);
        
        }
        
        var interval = setInterval(contador, 1000);
        
        
               
            
            })