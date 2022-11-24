const submit = document.querySelector('.button');
submit.addEventListener('click', handler);


function handler (e) {
    e.preventDefault();

    let cliente = document.querySelector('.cliente1').value;
    let dentista = document.querySelector('.dentista1').value;
    let  horario = document.querySelector('.horario').value;

    // console.log(cliente);  // Teste Unitario
    // console.log(dentista);       // Teste Unitario
    // console.log(horario);      // Teste Unitario


    if (cliente && dentista && horario) {
        
        const _data = {
            id:"",
            cliente: cliente,
            dentista: dentista, 
            horario: horario
        };

        const _url = ` http://localhost:3000/consultas`;     

        const _options = {
            method: 'post',
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"},
            mode: 'cors',
            redirect: 'follow',
            cache: 'default'
        }


        fetch(_url, _options)
            .then(function(response) {
                // Tratar Erros
                if(!response.ok) throw new Error('Erro ao executar requisição!');
                

            }
        ) 
        .then(function(response){
            //console.log(response)
            if(response==null){
                window.location.reload();
                alert('Dados cadastrados com sucesso !');
                
            }
        })
 
    } else {
        alert('1 ou mais campos de pesquisa estão vazios, por favor preecha todos os campos!');
    }
}



