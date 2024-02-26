var button = document.querySelectorAll('button');
var input = document.querySelector('input');
var body = document.body
var string = ""

let btnArray = button;



btnArray.forEach((btnArray)=>{
    
    btnArray.addEventListener('mouseover',(e)=>{
        btnArray.style.backgroundColor = 'orange'
    })
    btnArray.addEventListener('mouseout',(e)=>{
        btnArray.style.backgroundColor = 'rgb(58, 58, 58)'
    })


    btnArray.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'OFF'){
            body.innerHTML = "<center>You turned OFF the Calculator</center>"
            body.style.backgroundColor = "black"
            body.style.color = 'white'
            body.style.fontsize = '30px'
            console.log(body)
        }
        if(e.target.innerHTML == '=')
        {
            string = eval(string)
            input.value = string
        }
        else
        {
            if(e.target.innerHTML == 'AC'){
                string = ""
                input.value = string
            }else{
                if(e.target.innerHTML == 'del'){
                    string = string.substring(0,string.length-1)
                    input.value = string
                }else{
                    string += e.target.innerHTML;
                    input.value = string
                }
            }
        }
    })

})