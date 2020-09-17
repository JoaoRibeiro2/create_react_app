namespace empresa{
    
    let p = new Pessoa();
    p.nome = "Maria";
    p.idade = 20;


    document.querySelector("#nome").textContent = p.nome
    document.querySelector("#idade").textContent = p.idade.toString()
    document.querySelector("#anoNasc").textContent = p.anoNasc(2020).toString()
}