let nt1 = parseFloat(prompt("Digite a primeira nota: "));
let nt2 = parseFloat(prompt("Digite a segunda nota: "));
let nt3 = parseFloat(prompt("Digite a terceira nota: "));
let nt4 = parseFloat(prompt("Digite a quarta nota: "));

if (nt1 < 0 || nt1 > 10 ||
    nt2 < 0 || nt2 > 10 ||
    nt3 < 0 || nt3 > 10 ||
    nt4 < 0 || nt4 > 10) {
    alert("Digite somente notas entre 0 e 10!");
    
    }
    else
    {
    let media = ((nt1 + nt2 + nt3 + nt4) / 4).toFixed(2);

    if (media >= 6 && media <= 10)
    {
        alert("Você concluiu com a média: " + media + ". Resultado: Aprovado(a)");
    }

    else if (media >= 5 && media < 6)
    {
        alert("Você concluiu com a média: " + media + ". Resultado: Em recuperação");
    }

    else if (media >= 0 && media < 5)
    {
        alert("Você concluiu com a média: " + media + ". Resultado: Reprovado(a)");
    }
}