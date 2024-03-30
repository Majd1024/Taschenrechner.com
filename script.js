function appendOperation(operation){
    document.getElementById('resultarea').innerHTML +=operation;
}

function calculateResult() {
    let container = document.getElementById('resultarea')
    let result = eval(container.innerHTML)
    container.innerHTML = result;
}

function deletelast() {
    let container = document.getElementById('resultarea');
    if(container.innerHTML.endsWith(' ')){
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
    }
}

function deleteall() {
    let container = document.getElementById('resultarea');
    container.innerHTML = container.innerHTML.slice(0, -999999999999999);
}
