import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Gabriel",
      sobrenome: "Fronchak",
      email: "gabrielgmack@gmail.com",
      idade: 21,
      altura: 1.80,
      peso: 70
    });
    res.json({
      novoAluno
    });
  }
}

export default new HomeController();
