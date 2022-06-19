const verifyExistence = async (modelo, uid, mensajeError) => {
    const existencia = await modelo.findAll({ where: { uid } });
    if (existencia.length == 1) {
      return { correcto: true, error: null };
    }
    return { correcto: false, error: mensajeError };
  };
  
  const verifyUnique = async (unico, mensajeError) => {
    if (unico.length == 1) {
      return { correcto: false, error: mensajeError };
    }
    return { correcto: true, error: null };
  };
  
  const getAttribute = (array, atributo) => {
    res = [];
    array.forEach((item) => res.push(item[atributo]));
    return res;
  };

  module.exports = {
    verifyExistence,
    verifyUnique,
    getAttribute
  }