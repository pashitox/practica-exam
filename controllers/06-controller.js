const { generateBook } = require("../utils");
const utils = require("../utils");
/*
    6️⃣ ***EJERCICIO 6*** - classifyBooks 6️⃣
    ❕ CONSIGNA ❕
    1 - Retorna un nuevo objeto clasificado por genero a partir de los generos existentes
    📢 PUNTOS A TENER EN CUENTA 📢
    - Si no hay libros disponibles, arrojar un Error('No hay libros disponibles')
    - Vas a necesitar extraer los géneros de los libros para obtenerlos
    EJEMPLO --> 
    Dado el siguiente siguiente array:
      [{
         nombreLibro: 'Sol',
         genero: 'Horror'
      }, {
         nombreLibro: 'Luna',
         genero: 'Fantasia'
      }, {
         nombreLibro: 'Tierra',
         genero: 'Fantasia'
      }]
   clasifyBooks() retorna --> {
      Horror: [{ nombreLibro: 'Sol', genero: 'Horror' }],
      Fantasia: [{ nombreLibro: 'Luna', genero: 'Fantasia' }, { nombreLibro: 'Tierra', genero: 'Fantasia' }]
   }
   Nota: Estos datos son de ejemplo, en los tests vendran otros campos.
   */
const classifyBooks = () => {
  // ⚠️ No modificar nada arriba de esta línea ⚠️
  // Escribe tu código acá
  const Horror = [];
  const Fantasy = [];
  const History = [];
  const Suspense = [];

  if (!utils.books.length) throw new Error("No hay libros disponibles");
  utils.books.forEach((el) => {
    if (el.genre == "Fantasy") {
      if (!el) {
        return;
      } else {
        Fantasy.push(el);
      }
    }
    if (el.genre == "Horror") {
      if (!el) {
        return;
      } else {
        Horror.push(el);
      }
    }
    if (el.genre == "History") {
      if (!el) {
        return;
      } else {
        History.push(el);
      }
    }
    if (el.genre == "Suspense") {
      if (!el) {
        return;
      } else {
        Suspense.push(el);
      }
    }
  });

  let obj = {};

  if (Fantasy.length) {
    obj["Fantasy"] = Fantasy;
  }
  if (Horror.length) {
    obj["Horror"] = Horror;
  }
  if (History.length) {
    obj["History"] = History;
  }
  if (Suspense.length) {
    obj["Suspense"] = Suspense;
  }

  return obj;
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = classifyBooks;
