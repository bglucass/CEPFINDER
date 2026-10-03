    const buscar = document.getElementById("clicar");
    const botao = document.getElementById("clicar");

    buscar.addEventListener("click", buscarcep);
    document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        buscarcep();
    }
});

    function buscarcep() {

        console.log(typeof fetch);
        const endereco = document.getElementById("endereco");
        const valor = endereco.value;
        console.log(valor);

    fetch(`https://viacep.com.br/ws/${valor}/json/`)
            .then(resposta => resposta.json())
            .then(dados => {

                document.getElementById("rua").textContent = dados.logradouro;
                document.getElementById("bairro").textContent = dados.bairro;
                document.getElementById("estado").textContent = dados.estado;
                

        });
}
