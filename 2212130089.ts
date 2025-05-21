function exercicio_3(palavra1: string, palavra2: string) {
    let lista: number[][] = [];
    palavra1.split("").forEach(() => lista.push([0]));
    palavra2.split("").forEach((charPalavra2, i) => {
        palavra1.split("").forEach((charPalavra1, j) => {
            if (lista[j].length <= i) lista[j].push(0); 
            if (charPalavra1 === charPalavra2) {
                lista[j][i] = Math.max(lista[j][i===0?0:i-1] + 1, lista[j===0?0:j-1][i]);
            } else {
                lista[j][i] = Math.max(lista[j][i===0?0:i-1], lista[j===0?0:j-1][i]);
            }
        });
    });

    let resArr: number[] = [];
    lista.forEach((l) => {
        let val = l.pop();
        l.push(val??0);
        resArr.push(val ?? 0);
    });
    
    let last: number = 0;
    let subs: string[] = [];

    resArr.forEach((v, i) => {
        if (i > 0 && v > last) {
            last = v;
            if (palavra1.substring(i - last + 1, i + 1) === palavra2.substring(0, last)) 
                subs.push(palavra2.substring(0, last));
        } else {
            last = v;
        }
    });

    const res : string = subs.reduce((maior, atual) =>
        atual.length > maior.length ? atual : maior,
        ""
    );

    let resposta: string = "0|"
    palavra1.split("").forEach(c => {
        resposta+=c + "|";
    });
    resposta+=("\n");
    for (let i = 0; i < lista[0].length; i++) {
        resposta+=palavra2[i] + "|";
        for (let j = 0; j < lista.length; j++) {
            resposta+=lista[j][i] + "|";
        }
        resposta+="\n"
    }
    // return resposta;
    return res;
}

function main() {
    const ex3Teste = exercicio_3("babartoberc", "barc");
    console.log(ex3Teste, ex3Teste.length);
    
}

main();