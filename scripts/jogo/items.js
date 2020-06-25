class Item extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

        this.yInicial = height - this.altura - variacaoY;
        this.y = this.yInicial;
        // this.y = alturaY[Math.round(Math.random()*10)];/*-height - 307;*/
        this.velocidade = 19;
    }

    move() {
        this.x = this.x - this.velocidade;

        if (this.x < -this.largura) {
            this.x = width
        }
    }

    // posicaoY() {
    //     const alturaY = [200, 250, 300, 350, 400, 450, 500, 550, 150, 100];
    //     this.y = alturaY[Math.round(Math.random()*10)];
    // }
}

