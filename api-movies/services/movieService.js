import Filme from "../models/movies.js";

class FilmeService {
    async listarTodos() {
        try {
            const filmes = await Filme.find();
            return filmes;
        } catch (err) {
            console.error("Erro ao buscar filmes:", err);
            throw err;
        }
    }

    async cadastrar(titulo, ano, genero, duracao, estreia) {
        try {
            const filmeNovo = new Filme({
                titulo,
                ano,
                genero,
                duracao,
                estreia,
            });
            await filmeNovo.save();
            return filmeNovo;
        } catch (err) {
            console.error("Erro ao salvar filme:", err);
            throw err;
        }
    }

    async remover(id) {
        try {
            const removido = await Filme.findByIdAndDelete(id);
            console.log(`Filme com ID ${id} removido com êxito.`);
            return removido;
        } catch (err) {
            console.error("Erro ao deletar filme:", err);
            throw err;
        }
    }

    async atualizar(id, titulo, ano, genero, duracao, estreia) {
        try {
            const filmeAtualizado = await Filme.findByIdAndUpdate(
                id,
                { titulo, ano, genero, duracao, estreia },
                { new: true }
            );
            console.log(`Filme com ID ${id} atualizado.`);
            return filmeAtualizado;
        } catch (err) {
            console.error("Erro ao atualizar filme:", err);
            throw err;
        }
    }

    async buscarPorId(id) {
        try {
            const filme = await Filme.findById(id);
            return filme;
        } catch (err) {
            console.error("Erro ao buscar filme:", err);
            throw err;
        }
    }
}

export default new FilmeService();
