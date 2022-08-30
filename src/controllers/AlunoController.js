import Aluno from "../models/Aluno";
import Foto from "../models/Foto";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      order: [["id", "DESC"], [Foto, "id", "DESC"]],
      include: {
        model: Foto,
        attributes: ["filename"]
      }
    });
    return res.send({ alunos });
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      if (!aluno) {
        return res.status(400).json({
          errors: ["Erro ao criar aluno"]
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ["id", "nome", "sobrenome", "email"],
        order: [[Foto, "id", "DESC"]],
        include: {
          model: Foto,
          attributes: ["id", "filename"]
        }
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ["Não existe nenhum aluno com esse id"]
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ errors: ["Não existe um aluno com esse id"] });
      }
      await aluno.destroy();
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ errors: ["Não existe um aluno com esse id"] });
      }
      const updatedAluno = await aluno.update(req.body);
      return res.json(updatedAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }
}

export default new AlunoController();
