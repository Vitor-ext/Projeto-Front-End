function handler(e) {
    e.preventDefault();

    let especialidade = document.querySelector('.especialidade').value;


    // console.log(especialidade);  // Teste Unitario


    if (especialidade) {
        
        const _data = {
            id:"",
            especialidade: especialidade,

        };

        const _url = ` http://localhost:3000/especialidade`;     

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


window.onload = () => {
    const submit = document.querySelector('.button');
    submit.addEventListener('click', handler);
}
