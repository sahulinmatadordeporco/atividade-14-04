function ferverAgua(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("A água está fervendo");
            resolve();
        }, tempo);
    });
}

function cozinharMacarrao(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("O macarrão está cozido");
            resolve();
        }, tempo);
    });
}

async function prepararMacarrao() {
    console.log("Começando a preparar o macarrão");
    
    await ferverAgua(3000);         
    await cozinharMacarrao(5000);   
    
    console.log("Macarrão está pronto para servir");
}

prepararMacarrao();