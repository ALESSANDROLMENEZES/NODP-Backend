/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Curso', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'descricao': {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "null"
    },
    'perfis_usuario_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Perfil',
        key: 'usuario_id'
      }
    }
  }, {
      tableName: 'cursos',
      timestamps: false
  });
};