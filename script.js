function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'masculino'
        } else if (fsex[1].checked) {
            gênero = 'feminino'
        }
         res.style.textalign = 'center'
         res.innerHTML = `Você é do sexo <strong>${gênero}</strong> e possui ${idade} anos!`
    }
}