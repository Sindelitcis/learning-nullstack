import Nullstack from 'nullstack'

import './Application.css'
import { Pais } from './paises';

class Application extends Nullstack {
  limite = 3;
  
  texto = "Teste 1, 2, 3..."
  vezesClicadas = 0

  clicarBotao() {
    if (this.vezesClicadas < this.limite) {
      this.texto += ' aaa'
    } else {
      this.texto = "materiais"
    }
    if (this.limite >= 1) this.limite -= 1

    this.vezesClicadas += 1
  }

  render() {
    return (
      <body>

        <h1>Show de bola</h1>
        <p>Você tem {this.limite}, {this.texto}</p>
        <button onclick={this.clicarBotao}>Botão {this.vezesClicadas}</button>
        <br />
        <Pais nome="Brasil" sigla="br" />

        <Pais nome="Estados Unidos" sigla="us" />

        <Pais nome="França" sigla="fr" />
      </body>
    )
  }

}

export default Application
