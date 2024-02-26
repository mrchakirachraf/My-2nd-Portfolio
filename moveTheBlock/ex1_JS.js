var cal = document.getElementById("param")
cal.style.background="green"
cal.style.width="10%"
cal.style.color="white"
cal.style.opacity="0.7"
cal.style.height="10%"
cal.style.position="absolute"


function move_Horizontally()
{
    let elem = document.getElementById("param")
    if(elem.style.right == '0%')
    {
        moveToLeft()
        setTimeout(function () { console.log('im here') 
            if(elem.style.right == '90%')
            {
                moveToRight()
            }
        },4500)
    }
    if(elem.style.right == '90%')
    {
        moveToRight();
        console.log(elem.style.right);
        setTimeout(function () {
            if (elem.style.right == '0%') {
                moveToLeft();
            }
        },4500)
    }
}

function move_Vertically()
{
    let elem = document.getElementById("param")
    if(elem.style.top == '0%')
    {
        moveDown()
        setTimeout(function () {
            if(elem.style.top == '90%')
            {
                moveUp();
            }
        },4500)
    }
    if(elem.style.top == '90%')
    {
        moveUp()
        setTimeout(function () {
            if(elem.style.top == '0%')
            {
                moveDown();
            }
        },4500)
    }
}

function move_diagonally()
{
    let elem = document.getElementById("param")
    if(elem.style.top == '0%' && elem.style.right == '90%')
    {
        moveToRight()
        moveDown()
        setTimeout(function () {
            if(elem.style.top == '90%' && elem.style.right == '0%')
            {
                moveToLeft()
                moveUp()
            }
        },4500)
    }
    if(elem.style.top == '90%' && elem.style.right == '0%')
    {
        {
            moveToLeft()
            moveUp()
            setTimeout(function () {
                if(elem.style.top == '0%' && elem.style.right == '90%')
                {
                    moveToRight()
                    moveDown()
                }
            },4500)
        }
    }
    if(elem.style.top == '90%' && elem.style.right == '90%')
    {
        {
            moveToRight()
            moveUp()
            setTimeout(function () {
                if(elem.style.top == '0%' && elem.style.right == '0%')
                {
                    moveToLeft()
                    moveDown()
                }
            },4500)
        }
    }
    if(elem.style.top == '0%' && elem.style.right == '0%')
    {
        {
            moveToLeft()
            moveDown()
            setTimeout(function () {
                if(elem.style.top == '90%' && elem.style.right == '90%')
                {
                    moveToRight()
                    moveUp()
                }
            },4500)
        }
    }
}

function moveToRight()
{
    let elem = document.getElementById("param");
    let pos = 0.0;
    let interval = setInterval(animate,1);
    let rightpos = 90.0;
    function animate() {
        if(elem.style.left != "90%")
        {
            pos = pos + 0.1 ;
            rightpos = rightpos - 0.1;
            elem.style.right = rightpos + "%"
            elem.style.left = pos + "%";
        }else{
            clearInterval(interval)
            elem.style.right = '0%'
            console.log(elem.style.right)
        }
    }
}
function moveToLeft()
{
    let elem = document.getElementById("param");
    let pos = 0.0;
    let leftpos = 90.0;
    let interval = setInterval(animate,1);
    function animate() {
        if(elem.style.right != "90%")
        {
            pos = pos + 0.1 ;
            leftpos = leftpos - 0.1;
            elem.style.right = pos + "%";
            elem.style.left = leftpos + "%";
        }else{
            clearInterval(interval)
            elem.style.right = '90%'
        }
    }
}

function moveDown()
{
    console.log('start of down function')
    let elem = document.getElementById('param');
    let pos = 0.0;
    let posBot = 90.0;
    let interval = setInterval(animate,1);
    function animate()
    {
        if(elem.style.top != "90%")
        {
            pos = pos + 0.1;
            posBot = posBot - 0.1;
            elem.style.top = pos + '%';
            elem.style.bottom = posBot + '%';
            console.log("im moving down")
        }else{
            clearInterval(interval);
            elem.style.top = '90%'
            
        }
    }
}
function moveUp()
{
    
    let elem = document.getElementById('param');
    let pos = 0.0;
    let posTop = 90.0;
    let interval = setInterval(animate,1);
    function animate()
    {
        if(elem.style.bottom != "90%")
        {
            pos = pos + 0.1;
            posTop = posTop - 0.1;
            elem.style.bottom = pos + '%';
            elem.style.top = posTop + '%';
            console.log("im moving up")
        }else{
            clearInterval(interval);
            elem.style.top = '0%'
        }
    }
}

function start_top()
{
    let elem = document.getElementById("param")
    elem.style.top = '0%'
}

function start_bot()
{
    let elem = document.getElementById("param")
    elem.style.top = '90%'
}

function start_right()
{
    let elem = document.getElementById("param")
    elem.style.right = '0%'
}

function start_left()
{
    let elem = document.getElementById("param")
    elem.style.right = '90%'
}
