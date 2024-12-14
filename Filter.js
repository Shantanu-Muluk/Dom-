let filter = document.querySelector("#filter");

filter.addEventListener("keyup", (event)=>{
    let textEntered = event.target.value.toLowerCase();
    let fruitItem = document.getElementsByClassName("fruit");

    for(let i=0;i<fruitItem.length;i++){
        let currentText = fruitItem[i].firstChild.textContent.toLowerCase();
        if(currentText.indexOf(textEntered) == -1){
            fruitItem[i].style.display = "none"
        }else{
            fruitItem[i].style.display = "flex"
        }
    }
})