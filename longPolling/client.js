var p = document.getElementsByTagName('p')[0];
(function poll(){
    p.innerHTML += 'client request time ' + new Date().getMilliseconds() + '\t' ;
    setTimeout(function(){
        $.ajax({ 
            url: "http://" + host + ":8010/",
            success: function(data){
                //Update your data
                p.innerHTML += 'server respones time ' + data + '<br>';
                //Setup the next poll recursively
                poll();
            }
        });
    }, 1000);
})();
