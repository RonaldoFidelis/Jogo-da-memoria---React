import { Placar } from "./Placar";
import { Carta } from "./Carta";
import { parDeCarta } from "../consts/cartas";

export const Jogo = () => {
    return (
        <div className="jogo-da-memoria">
            <h1>Jogo da memoria</h1>
            <div className="jogo-conteudo">
                <Placar />
                <div className="jogo-carta">
                    {parDeCarta.map((carta) => (
                        <Carta key= {carta.id} {...carta} />
                    ))}
                </div>
            </div>
        </div>
    );
};