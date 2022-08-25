const Router = require('express')
const { getCursos, postCursos, deleteCursos, updateCursos } = require('./cursosController')
const router = Router();

router.get('/', getCursos);
router.post('/', postCursos);
router.delete('/:id', deleteCursos);
router.put('/:id', updateCursos);

module.exports = router;