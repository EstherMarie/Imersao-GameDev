class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = [
       {
        inimigo: 0,
        velocidade: 10
       },
       {
        inimigo: 1,
        velocidade: 30
       },
       {
        inimigo: 2,
        velocidade: 20
       },
       {
        inimigo: 0,
        velocidade: 15
       }
    ]
  }

  setup() {
    clouds = new Cenario(bg_clouds, 0.1);
    mountains = new Cenario(bg_mountains, 0.15);
    trees = new Cenario(bg_trees, 0.5);
    ground = new Cenario(bg_ground, 10);
    points = new Pontuacao();
    player = new Personagem(matrizPersonagem, sprite, 10, 30, 180, 116, 90, 58);
    // playerJump = new Personagem (matrizPulo, sprite, 10, 180, 116, 90, 58);
    const ant = new Inimigo(
      matrizAnt,
      inimigo,
      width,
      50,
      55,
      47,
      37,
      31,
      13,
      100
    );
    const grasshopper = new Inimigo(
      matrizGrasshopper,
      inimigo,
      width,
      26,
      104,
      90,
      52,
      45,
      16,
      100
    );
    const gator = new Inimigo(
      matrizGator,
      inimigo,
      width,
      170,
      92,
      98,
      46,
      49,
      19,
      100
    );
    accorn = new Item(matrizAccorn, sprite, width - 20, 180, 32, 28, 16, 14);

    inimigos.push(ant);
    inimigos.push(grasshopper);
    inimigos.push(gator);

    cenario.push(clouds);
    cenario.push(mountains);
    cenario.push(trees);
  }

  keyPress(key) {
    if (key === "ArrowUp") {
      player.pula();
      jumpSound.play();
    }
  }

  mouseClick(key) {
    player.pula();
    jumpSound.play();
  }

  draw() {
    clouds.exibe();
    clouds.move();
    mountains.exibe();
    mountains.move();
    trees.exibe();
    trees.move();
    ground.exibe();
    ground.move();
    points.exibe();
    points.adicionarPontos();
    player.exibe();
    player.aplicaGravidade();
    accorn.exibe();
    accorn.move();

    pulo();
    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
       
    }

    if (player.estaColidindo(inimigo)) {
      // console.log('colidiu');
      player.matriz = matrizHurt;
      hurtSound.play();
      vida.perdeVida();
      player.ficaInvencivel(); // tornarInvencivel()
      if(vida.vidas === 0) {
         image(gameOver, width / 2 - 200, height / 3);
         noLoop();
      }
    }

    if (player.coletaItens(accorn)) {
      // console.log('coletou');
      accorn.x = width + 550;
      // console.log(accorn.y)
      itemSound.play();
      // points.adicionarPontos(100);
      // noLoop();
      // points += 100
    }

    function pulo() {
      if (player.y != player.yInicial) {
        player.matriz = matrizPulo;
      } else {
        player.matriz = matrizPersonagem;
      }
      // if (player.y === 507)  else if (keyIsPressed === true || mouseIsPressed === true) {
      //   player.matriz = matrizPulo;
      // }
    }
  }
}
