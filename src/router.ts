import { Router } from 'express'
import { MoviesControllers } from './controllers/MoviesControllers'

import { handlevalidate } from './middleware/handleValidate'
import { ValidationColletions } from './middleware/validateColletions'

const router: Router = Router()

router.post('/create', ValidationColletions(),  handlevalidate, MoviesControllers.saveMoviels)
router.get('/all', MoviesControllers.getMovielsAll)

export default router