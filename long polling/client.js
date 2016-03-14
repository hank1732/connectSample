var p = document.getElementsByTagName('p')[0];
(function poll(){
    p.innerHTML += 'client request time ' + new Date().getMilliseconds() + '\t' ;
    setTimeout(function(){
        $.ajax({ 
            url: "http://127.0.0.1:8082/",
            success: function(data){
                //Update your data
                p.innerHTML += 'server respones time ' + data + '<br>';
                //Setup the next poll recursively
                poll();
            }
        });
    }, 1000);
})();
