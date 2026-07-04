let cont = 0
function contar()
{
    let areaClik = document.getElementById('icone-clik')
    let exibCont = document.getElementsByTagName('p')[0]
   
    if (areaClik)
    {
        cont += 1
    }
    exibCont.innerText = ''
    exibCont.innerText = "Clicks: " + cont


}