let array = []
let res = document.getElementById("res")
let resto = 0

function add(){
    let num = Number(document.getElementById("num").value)
    array.push(num)
    res.innerHTML = array
}
function ale(){
    array = []
    let num = Number(document.getElementById("num").value)
    for(i=0;i<num;i++){
        array.push((Math.floor(Math.random() * (20 - 1 + 1) + 1)))
    }
    console.log(array)
    res.innerHTML = array
}
function ordena(){
    var radios = document.getElementsByName("sort");
    for (var i = 0; i < radios.length; i++) {
        res.innerHTML = ""
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value);
            if (radios[i].value == "Bubble"){
                let reverse = document.getElementById("reverse");
                if (reverse.checked == true){
                    for(i=0;i<array.length;i++){
                        for(j=1;j<array.length;j++){
                            if(array[j - 1] < array[j]){
                                resto = array[j]
                                array[j] = array[j-1]
                                array[j-1] = resto
                            }
                        }
                        res.innerHTML += "<br>" + array
                    }
                } else {
                    for(i=0;i<array.length;i++){
                        for(j=1;j<array.length;j++){
                            if(array[j - 1] > array[j]){
                                resto = array[j]
                                array[j] = array[j-1]
                                array[j-1] = resto
                            }
                        }
                        res.innerHTML += "<br>" + array
                    }
                }
            } else if (radios[i].value == "Insertion"){
                let reverse = document.getElementById("reverse");
                if (reverse.checked == true){
                    for(i=1;i<array.length;i++){
                        let j = i - 1
                        valor_atual = array[i]
                        while(j>=0 && valor_atual > array[j]){
                        array[j+1]=array[j]
                        j--
                        }
                        array[j+1]=valor_atual
                        res.innerHTML += "<br>" + array
                    }
                } else {
                    for(i=1;i<array.length;i++){
                        let j = i - 1
                        valor_atual = array[i]
                        while(j>=0 && valor_atual < array[j]){
                        array[j+1]=array[j]
                        j--
                        }
                        array[j+1]=valor_atual
                        res.innerHTML += "<br>" + array
                    }
                }
            } else {
                let reverse = document.getElementById("reverse");
                if (reverse.checked == true){
                    for(i=0;i<array.length;i++){
                        menor = i
                        for(j=i+1;j<array.length;j++){
                        if(array[j]>array[menor]){
                        menor = j
                        }
                        }
                        if(i != menor){
                        valor_atual = array[i]
                        array[i]=array[menor]
                        array[menor]=valor_atual
                        res.innerHTML += "<br>" + array
                        }
                        
                        }
                } else {
                    for(i=0;i<array.length;i++){
                        menor = i
                        for(j=i+1;j<array.length;j++){
                        if(array[j]<array[menor]){
                        menor = j
                        }
                        }
                        if(i != menor){
                        valor_atual = array[i]
                        array[i]=array[menor]
                        array[menor]=valor_atual
                        res.innerHTML += "<br>" + array
                        }
                        
                    }
                }
            }
                        
            
        }
    }
    
}