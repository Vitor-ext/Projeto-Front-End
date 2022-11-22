function handler(e) {
    e.preventDefault();

    let dentista = document.querySelector('.Nome_Dentista').value;
    let CPF = document.querySelector('.CPF_Dentista').value;
    let RG = document.querySelector('.RG_Dentista').value;
    let telefone = document.querySelector('.Telefone_Dentista').value;
    let endereco = document.querySelector('.Endereco_Dentista').value;

    // console.log(dentista);  // Teste Unitario
    // console.log(CPF);      // Teste Unitario
    // console.log(RG);       // Teste Unitario
    // console.log(telefone); // Teste Unitario
    // console.log(endereco); // Teste Unitario

    if (dentista && CPF && RG && telefone && endereco) {
        
        const _data = {
            id:"",
            nome: dentista,
            cpf: CPF, 
            rg: RG, 
            telefone: telefone
        };

        const _url = ` http://localhost:3000/dentistas`;     

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
