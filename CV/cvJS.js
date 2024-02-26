const storedMode = localStorage.getItem('mode')

let cssLink = document.getElementById('cssLink')


function changeTheCss(){
    let cssName
    let modeLink = cssLink.href.split('/')
    let finalLink = ""
    let i
    if(storedMode == 'dark')
    {
        cssName = 'cvCSSDarkMode.css'
    }else{
        cssName = 'cvCSSWhiteMode.css'
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

let showSideBarID = document.getElementById('showSideBarID')
let hideSideBarID = document.getElementById('hideSideBarID')
let sideBar = document.getElementsByClassName('sideBar')

function showSideBar(){
    sideBar[0].style.display = 'flex'
}
showSideBarID.addEventListener('click',showSideBar)

function hideSideBar(){
    sideBar[0].style.display = 'none'
}
hideSideBarID.addEventListener('click',hideSideBar)