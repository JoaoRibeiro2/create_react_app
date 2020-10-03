namespace empresa{
    
    let c = new Cliente("Joao Vitor Ribeiro", 234 )
    // c.nome = "Pedro";
    c.idade = 30;
    // c.codCliente = 123;
    c.credito = 2000;


    document.querySelector("#nome").textContent = c.nome
    document.querySelector("#idade").textContent = c.idade.toString()
    document.querySelector("#anoNasc").textContent = c.anoNasc(2020).toString()
    document.querySelector("#codCliente").textContent = c.codCliente.toString()
    document.querySelector("#credito").textContent = c.credito.toString()
    // document.querySelector("vl_compra").textContent = c.compar.toString()
    document.querySelector("#comprar").textContent = c.comprar(3000, 1000).toString()

   let cv = new ClienteVip("Miguel Ribeiro", 321);

    cv.idade = 30;
    cv.credito = 7000;
    cv.bonus = 4000;

    document.querySelector("#nomeVip").textContent = cv.nome
    document.querySelector("#idadeVip").textContent = cv.idade.toString();
    document.querySelector("#anoNascVip").textContent = cv.anoNasc(2020).toString();
    document.querySelector("#codClienteVip").textContent = cv.codCliente.toString();
    document.querySelector("#creditoVip").textContent = cv.credito.toString();
    // document.querySelector("vl_compra").textContent = cv.compar.toString()
    document.querySelector("#comprarVip").textContent = cv.comprar(1000, 0).toString();
}