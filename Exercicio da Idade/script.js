function procurar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('ano')
    var res = document.getElementById('res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano ){
       res.innerHTML = 'Error, tente novamente'
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(nasc.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'garotoCrianca.jpg')
            }else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'garotoJovem.jpg')
            }else if (idade >= 21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'garotoAdulto.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'garotoVelho.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'garotaCrianca.jpg')
            }else if(idade >= 10 && idade < 21){
                //Jovem 
                img.setAttribute('src', 'garotaJovem.jpg')
            }else if (idade >= 21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'garotaAdulta.jpg')
            }else{
               //Idoso
               img.setAttribute('src', 'garotaVelha.gif')
            }
        }
        res.innerHTML = `Idade Calulada: ${idade} Genero Calculado: ${genero}`
        res.appendChild(img)
    }
}


