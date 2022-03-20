alert("Sử dụng đối tượng Array")

function ranDomNumber(){
    arr=[]
    for (let i =0; i<Math.floor(Math.random() *(20-10)) +10;i++){
        arr.push(Math.floor(Math.random() *(100-10)) +10);
        
    }
    
    document.getElementById('changed').innerHTML=arr.join(",");
}
function arrange(){
    arr= document.getElementById('changed').innerHTML.split(',')
   if(document.getElementById('ascending').checked == true){
        arr.sort(function(a, b){return a - b});
        document.getElementById('changesInValue').innerHTML=arr;
   }
   if(document.getElementById('descending').checked == true){
    arr.sort(function(a, b){return b - a});
    document.getElementById('changesInValue').innerHTML=arr;
    }

} 


function addLocation(){
    number= document.getElementById('number').value
    index= document.getElementById('index').value
    if ((index != "" && index != null )&& (number != ""&& number!= null)){
    arr= document.getElementById('changesInValue').innerHTML.split(',')
    
    arr.splice( index, 0, number)
    document.getElementById('changesInValue').innerHTML=arr.join(",");
    
    }
    else{
        alert("must be filled out")
    }

}

