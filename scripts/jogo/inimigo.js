class Inimigo extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    velocidade
  ) {
    super(
      matriz,
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite,
      velocidade
    );

    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.velocidade = velocidade;
    this.x = width;
  }

  move() {
    this.x = this.x - this.velocidade;
  }

  aparece() {
    this.x = width;
  }
}
