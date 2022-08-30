import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "O nome deve possuir entre 3 a 255 caracteres"
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 255],
            msg: "Sobrenome deve possuir entre 3 a 255 caracteres"
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        unique: {
          msg: "E-mail já cadastrado"
        },
        validate: {
          isEmail: {
            msg: "E-mail inválido"
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: "",
        validate: {
          isInt: {
            msg: "Idade precisa ser um número inteiro"
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "O peso deve ser um número com casa decimal"
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "A altura deve ser um número com casa decimal"
          }
        }
      }
    }, {
      sequelize
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
}
