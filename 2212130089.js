function exercicio_3(palavra1, palavra2) {
    var lista = [];
    palavra1.split("").forEach(function () { return lista.push([0]); });
    palavra2.split("").forEach(function (charPalavra2, i) {
        palavra1.split("").forEach(function (charPalavra1, j) {
            if (lista[j].length <= i)
                lista[j].push(0);
            if (charPalavra1 === charPalavra2) {
                lista[j][i] = Math.max(lista[j][i === 0 ? 0 : i - 1] + 1, lista[j === 0 ? 0 : j - 1][i]);
            }
            else {
                lista[j][i] = Math.max(lista[j][i === 0 ? 0 : i - 1], lista[j === 0 ? 0 : j - 1][i]);
            }
        });
    });
    var resArr = [];
    lista.forEach(function (l) {
        var val = l.pop();
        l.push(val !== null && val !== void 0 ? val : 0);
        resArr.push(val !== null && val !== void 0 ? val : 0);
    });
    var last = 0;
    var subs = [];
    resArr.forEach(function (v, i) {
        if (i > 0 && v > last) {
            last = v;
            if (palavra1.substring(i - last + 1, i + 1) === palavra2.substring(0, last))
                subs.push(palavra2.substring(0, last));
        }
        else {
            last = v;
        }
    });
    var res = subs.reduce(function (maior, atual) {
        return atual.length > maior.length ? atual : maior;
    }, "");
    var resposta = "0|";
    palavra1.split("").forEach(function (c) {
        resposta += c + "|";
    });
    resposta += ("\n");
    for (var i = 0; i < lista[0].length; i++) {
        resposta += palavra2[i] + "|";
        for (var j = 0; j < lista.length; j++) {
            resposta += lista[j][i] + "|";
        }
        resposta += "\n";
    }
    return lista;
    // return resposta;
    // return res;
}
function main() {
    var ex3Teste = exercicio_3("babartoberc", "barc");
    console.log(ex3Teste, ex3Teste.length);
}
main();
