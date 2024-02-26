let powerButton = document.getElementsByClassName('powerButton')
let cssLink = document.getElementById('cssLink')
let powerButtonImage = document.getElementsByClassName('powerButtonImage')
const storedMode = localStorage.getItem('mode')
let showSideBarID = document.getElementById('showSideBarID')
let hideSideBarID = document.getElementById('hideSideBarID')
let sideBar = document.getElementsByClassName('sideBar')

var slashNumber
slashNumber = cssLink.href.split('/').length


function switchMode(){
    let modeLink = cssLink.href
    let cssName = modeLink.split('/')[slashNumber-1]
    if(cssName == "indexCSSDarkMode.css")
    {
        cssName = "indexCSSWhiteMode.css"
    }else{
        cssName = "indexCSSDarkMode.css"
    }
    cssLink.href = modeLink.split('/').slice(0,slashNumber-1).join('/') + '/' + cssName
}

function switchButtonImage()
{
    for(let i = 0;i<=1;i++){
        let imageSrcLink = powerButtonImage[i].src
        let imageName = imageSrcLink.split('/')
        if(imageName[slashNumber] == 'sunButton.png')
        {
            imageName[slashNumber] = 'moon.png'
        }else{
            imageName[slashNumber] = 'sunButton.png'
        }
        powerButtonImage[i].src = imageName.slice(0,slashNumber).join('/')
    }
}

function saveModeType(){
    let cssName = cssLink.href.split('/')[slashNumber-1]
    let currentMode
    if(cssName == "indexCSSDarkMode.css")
    {
        currentMode = 'dark'
    }else{
        currentMode = 'white'
    }
    localStorage.setItem('mode',currentMode)
}

powerButton[0].addEventListener('click',switchMode)
powerButton[0].addEventListener('click',switchButtonImage)
powerButton[0].addEventListener('click',saveModeType)

powerButton[1].addEventListener('click',switchMode)
powerButton[1].addEventListener('click',switchButtonImage)
powerButton[1].addEventListener('click',saveModeType)


//function that changes the css based on the strored variable mode
function changeTheCss(){
    let cssName
    let modeLink = cssLink.href.split('/')
    let finalLink = ""
    let i
    if(storedMode == 'dark')
    {
        cssName = 'indexCSSDarkMode.css'
    }else{
        cssName = 'indexCSSWhiteMode.css'
    }
    for(i=0;i<modeLink.length;i++){
        if(i == modeLink.length - 1)
        {
            finalLink += cssName
            break
        }
        finalLink += modeLink[i] + '/'
    }
    cssLink.href = finalLink
}
changeTheCss()


function showSideBar(){
    sideBar[0].style.display = 'flex'
}
showSideBarID.addEventListener('click',showSideBar)

function hideSideBar(){
    sideBar[0].style.display = 'none'
}
hideSideBarID.addEventListener('click',hideSideBar)