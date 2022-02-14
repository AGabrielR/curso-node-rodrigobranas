var createSerialGenerator = function () {

    //console.log('Criando o serialGenerator.js')  usado para testar e demonstrar o cache

    var max = 10000;

    /*module.exports.generate = function () {
        return Math.floor(Math.random() * max);
    }; */

    this.generate = function () {
        return Math.floor(Math.random() * max);
    };


    return {
        generate: generate
    }

    /* module.exports = {
        generate: generate
    } */

    /*
        (APENAS module.exports É RETORNADO DA FUNÇÃO REQUIRE)
        
        Posso usar somente exports ou this, exemplo:
    
        exports:
        
        exports.generate = function () {
            return Math.floor(Math.random() * max);
        };
    
        this:
    
        this.generate = function () {
            return Math.floor(Math.random() * max);
        };
    
    */

}

module.exports = createSerialGenerator();