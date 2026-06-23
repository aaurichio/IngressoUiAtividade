import { Filme } from "./filme";

export interface Sessao {
      id: number;
	  data?: number;
      horario?: number;
	  preco?: number;
	  sala?: string;
	  filme?: Filme;
}