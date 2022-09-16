const utils = require('../utils');
/*
    5️⃣ ***EJERCICIO 5*** - takeBook 5️⃣
      ❕ CONSIGNA ❕
     1 - Retornar un libro del array de books según su id junto a su fecha de prestación
     2 - Si la cantidad de libros a pedir supera el stock arrojar un Error('La cantidad de libros solicitados supera el stock')
     3 - Si el libro no es encontrado, arrojar un Error('Libro no encontrado')
     4 - Si no se recibe una cantidad de libros a retirar, arrojar un Error('Cantidad requerida')
      📢 PUNTOS A TENER EN CUENTA 📢
      - Recibes los parámetros: id de libro (id) y la cantidad de libros a solicitar (quantity).
      - La fecha de prestación debe ser hoy.
      - Además, debes contemplar que la cantidad de libros a pedir, sea menor o igual al stock disponible.
      - Recuerda que los mensajes de error deben ser exactamente como pide el enunciado
      - Recuerda que puedes acceder al array products a través de utils.products
      - Vas a necesitar utilizar varios métodos del objeto Date() para asignar la fecha de devolución
  */
const takeBook = (id, quantity) => {
  // ⚠️ No modificar nada arriba de esta línea ⚠️
  // Escribe tu código acá
  let bookFound = utils.books.find((b) => b.id === id);
  if (!bookFound) {
    throw new Error("Libro no encontrado");
  }
  if (!quantity) {
    throw new Error("Cantidad requerida");
  }
  if (quantity > bookFound.stock) {
    throw new Error("La cantidad de libros solicitados supera el stock");
  }
  bookFound.stock -= quantity;
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = `${day}/${month}/${year}`;
  return {
    book: bookFound,
    date: date,

};
}
// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = takeBook;
