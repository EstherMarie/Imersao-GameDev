class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){ 
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.imagem = imagem;
    this.variacaoY = variacaoY
    this.yInicial = height - this.altura - variacaoY;//height - 147;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.alturaDoPulo = -33;
    this.pulos = 0;
  }

  pula() {
    if(this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    

    if(this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    /* Para futuros debugs de hitbox:
    noFill();
    rect(this.x, this.y, this.largura, this.altura)
    rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura); 
    */
    const precisao = .59;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao,
      this.altura * precisao, 
      inimigo.x, 
      inimigo.y, 
      inimigo.largura * precisao,
      inimigo.altura * precisao
      );

    return colisao;
  }

  coletaItens(item) {
    /* Para futuros debugs de hitbox:
    noFill();
    rect(this.x, this.y, this.largura, this.altura)
    rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura); 
    */
    const precisao = .59;
    const coleta = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao,
      this.altura * precisao, 
      item.x, 
      item.y, 
      item.largura * precisao,
      item.altura * precisao
      );

    return coleta;
  }
}