const router = require('express').Router();
const listBooks = require('../controllers/02-controller');
// No modificar arriba de esta línea

/*
  9️⃣ ***EJERCICIO 9*** GET /books 9️⃣
      ❕ CONSIGNA ❕
    1 - Integrar la función listBooks que desarrollaste previamente para obtener los libros.
    2 - Responder con los resultados encontrados
    📢 PUNTOS A TENER EN CUENTA 📢
    - Si algo falla al traer las categorías, debes responder con un status code 400 y el mensaje del error!
*/

// router.get('/books', (req, res) => {});
router.get("/books", (req, res) => {
  if (req.query.title) {
    try {
      const books = listBooks(req.query.title);
      res.status(200).json(books);
    } catch (error) {
      res.status(400).json({ err: error.message });
    }
  } else {
    try {
      const books = listBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(400).json({ err: error.message });
    }
  }
});
  
// No modificar nada debajo de esta línea
module.exports = router;
