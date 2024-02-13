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
        const cpf = $('#cpf').val()

        const novoItem = $('<li style="display:none;"></li>')

        $(`<span>${name}</span>`).appendTo(novoItem)
        $(`<p>${cpf}</p>`).appendTo(novoItem)

        $('.lista ul').append(novoItem)
        $(novoItem).fadeIn(1000)

        $('#cpf').val('')
        $('#email').val('')
        $('#celular').val('')
        $('#endereço').val('')
        $('#numeroCasa').val('')
        $('#cep').val('')
        $('#nome').val('')
    })
    
    /*$('ul').on('mouseover', function(){

        const name = $('#nome').val()
        const cpf = $('#cpf').val()
        const email = $('#email').val()
        const cell = $('#celular').val()
        const rua = $('#endereço').val()
        const numRua = $('#numeroCasa').val()
        const cep = $('#cep').val()

        const dados = 
        (`<p>Nome: ${name}</p>
        <p>CPF: ${cpf}</p>
        <p>Email: ${email}</p>
        <p>Cell: ${cell}</p>
        <p>${rua}</p>
        <p>Numero: ${numRua}</p>
        <p>CEP: ${cep}</p>`)

        $('li')( function(){
            
        })
    })*/
})