const { Router } = require('express');
const cursosRoutes = require('./CursosManager/cursosRoutes')


const router = Router();

router.use('/cursos', cursosRoutes);


module.exports = router;
