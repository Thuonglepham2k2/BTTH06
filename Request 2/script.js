function ranDomNumber(){
    arr=[]
    for (let i =0; i<Math.floor(Math.random() *(20-10)) +10;i++){
        arr.push(Math.floor(Math.random() *(100-10)) +10);
        
    }
    
    document.getElementById('changed').innerHTML=arr.join(",");
}



