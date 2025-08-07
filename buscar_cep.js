const cep_input = process.argv[2];

if (!cep_input) {
    console.log("Erro: Por favor, forneça um CEP.");
    console.log("Exemplo: node busca_cep.js 12345678");
    process.exit(1);
}

const cep_limpar = cep_input.replace(/\D/g, '');

const url = `https://viacep.com.br/ws/${cep_limpar}/json/`;

console.log(`Buscando informações para o CEP ${cep_limpar}...`);

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Houve um problema com a requisição.');
        }
        return response.json();
    })
    .then(data => {
        if (data.erro) {
            throw new Error('CEP não foi encontrado ou é inválido.');
        }

        console.log("\n--- Endereço encontrado ---");
        console.log(`Logradouro: ${data.logradouro}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Cidade/UF: ${data.localidade}/${data.uf}`);
        console.log(`DDD: ${data.ddd}`);
        console.log("-----------------------------------------");
    })
    .catch(erro => {
        console.error(`\nErro: ${erro.message}`);
    });
