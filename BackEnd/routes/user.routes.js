import express from 'express'
import protectRoute  from '../middleware/protectRoute.js'
import {getUsersForsidebar} from '../controllers/user.controller.js'

const router = express.Router()

// router.get('/:id', protectRoute,getUserForsidebar)

export default router