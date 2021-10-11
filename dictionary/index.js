var dictionary=[
    {
        word: "happy",
        def: "you smile a lot",
        
    }
]


show=function(i){
    document.getElementById('word').innerHTML=dictionary[i].word;
    document.getElementById('description').innerHTML=dictionary[i].def;
    document. getElementById('worddef').innerHTML=dictionary[i].word;
}
search = function(){
    query = document.getElementById('searchbox').value;
    if(query==""){
        return ;
    }
    found = -1;
    for(var i=0; i<dictionary.length; i++){
       if(query== dictionary[i].word){
           found=i;
           break;
       }else{
           document.getElementById('word').innerHTML="not found";
           document.getElementById('description').innerHTML="not found";
           document. getElementById('worddef').innerHTML=' "not found" ';
       }
    }
    if (found>=0){
        show(found);
    }
}