function Tentar()
{
    let ps = document.getElementById('psec')
    let t = document.getElementById('tentativa')
    let ch = document.getElementById('c')
    let r = document.getElementById('res')

    if (ps.value.length == 0 || t.value.length == 0)
    {
        window.alert("Por favor, preencha todos os campos!")
    }
    else
    {
        let tent = 1
        while (tent < 5)
        {
            ch.innerHTML =` Erros: ${tent}`
            
        
            if (t.value == ps.value)
            {
                r.style.color = "rgb(132, 255, 95)"
                r.innerHTML= `Pababéns! A palavra era "${psec.value.toUpperCase()}"`
            }
            else
            {
                r.style.color = "red"
                r.innerHTML="Você errou..."
                t.value = ""
    
            }
            tent++
        }
    }
}
