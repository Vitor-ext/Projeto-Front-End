
window.onload = handler;

const { addListener } = require("nodemon");

function handler(e) {
    e.preventDefault();

    console.log("Deu Certo !");

    const _urlcl = `http://localhost:3000/clientes`;
    const _urldt = `http://localhost:3000/dentistas`;

    const _options = {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        cache: 'default'
    }

    fetch(_urlcl, _options)
        .then(function (response) {
            // Tratar Erros
            if (!response.ok) throw new Error('Erro ao executar requisição!');

            return response.json();
        }
        )
        .then(function (data) {
            console.log(data);

            let newContent = "";
 
            for(let i = 1; i < data.length; i++) { 
                newContent += `<option class="td_item">${data[i].nome}</option>`;                
            }

            document.getElementById('cliente').innerHTML = newContent;

        }

    )


    fetch(_urldt, _options)
    .then(function (response) {
        // Tratar Erros
        if (!response.ok) throw new Error('Erro ao executar requisição!');

        return response.json();
    }
    )
    .then(function (data) {
        console.log(data);

        let newContent = "";

        for(let i = 1; i < data.length; i++) { 
            newContent += `<option class="td_item">${data[i].nome}</option>`;            
        }

        document.getElementById('dentista').innerHTML = newContent;

    }

)}


