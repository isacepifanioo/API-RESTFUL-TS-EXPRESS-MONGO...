import { Router } from 'express'
import { MoviesControllers } from './controllers/MoviesControllers'

import { handlevalidate } from './middleware/handleValidate'
import { ValidationColletions } from './middleware/validateColletions'

const router: Router = Router()

router.patch('/update/:id', ValidationColletions(),  handlevalidate, MoviesControllers.updateById)
router.get('/moviels/:id', MoviesControllers.getById)
router.delete('/delete/:id', MoviesControllers.deleteById)
router.post('/create', ValidationColletions(),  handlevalidate, MoviesControllers.saveMoviels)
router.get('/all', MoviesControllers.getMovielsAll)

export default router