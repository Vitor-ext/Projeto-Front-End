function handler(e) {
    e.preventDefault();

    const _url = `http://localhost:3000/consultas`;

    const _options = {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        cache: 'default'
    }

    fetch(_url, _options)
        .then(function (response) {
            // Tratar Erros
            if (!response.ok) throw new Error('Erro ao executar requisição!');

            return response.json();
        }
        )
        .then(function (data) {
            console.log(data);

            let newContent = "";
                newContent += `<tr class="tr_title">`;  
                newContent += `<td class="td_title">ID</td>`;
                newContent += `<td class="td_title">CLIENTES</td>`;
                newContent += `<td class="td_title">HORARIO</td>`;
                newContent += `<td class="td_title">DENTISTA</td>`;
                newContent += `</tr>`;  
            for(let i = 1; i < data.length; i++) { 
                newContent += `<tr class="tr_item">`;    
                newContent += `<td class="td_item">${data[i].id}</td>`;
                newContent += `<td class="td_item">${data[i].cliente}</td>`;
                newContent += `<td class="td_item">${data[i].horario}</td>`;
                newContent += `<td class="td_item">${data[i].dentista}</td>`;
                newContent += `</tr>`;
                
            }

            document.getElementById('consultas').innerHTML = newContent;

        }

    )

}




window.onload = () => {
    const submit = document.querySelector('.button');
    submit.addEventListener('click', handler);
}
