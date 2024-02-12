$(document).ready(function() {
    $('#cpf').mask('000.000.000-00')
    $('#celular').mask('(00) 0 0000-0000')
    $('#cep').mask('00000-000')

    /*const name = $('#nome').val()
    const cpf = $('#cpf').val()
    const email = $('#email').val()
    const cell = $('#celular').val()
    const rua = $('#endereço').val()
    const numRua = $('#numeroCasa').val()
    const cep = $('#cep').val()*/

    $('form').on('submit', function(e) {
        e.preventDefault()

        const name = $('#nome').val()

        const novoItem = $('<li style="display:none;"></li>')

        $(`<span>${name}</span>`).apeendTo(novoItem)
        $(novoItem).appendTo('.lista ul')
        $(novoItem).fadeIn(1000)

        $('#cpf').val('')
    })
    
})