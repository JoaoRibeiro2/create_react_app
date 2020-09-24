namespace empresa{
    
    let c = new Cliente()
    c.nome = "Pedro"
    c.idade = 30;
    c.codCliente = 123;

    document.querySelector("#nome").textContent = c.nome
    document.querySelector("#idade").textContent = c.idade.toString()
    document.querySelector("#anoNasc").textContent = c.anoNasc(2020).toString()

    
}