import Nullstack from "nullstack";

export class Pais extends Nullstack {
    alerta({ nome }) {
        alert(`Você clicou em ${nome}`)
    }


    render({ nome, sigla }) {
        return <div onclick={this.alerta}>

            <img src={`https://raw.githubusercontent.com/hampusborgos/country-flags/main/svg/${sigla}.svg`} height="30px" />
            <br />
            <p>{nome}</p>

        </div>
    }
}