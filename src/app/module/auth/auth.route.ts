import { Router } from 'express'
import { authControllers } from './auth.controller'
import zodValidateHandler from '../../middleware/zodValidateHandler'
import { authZodSchema } from './auth.validation'
import auth from '../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post(
  '/login',
  zodValidateHandler(authZodSchema.signinZodSchema),
  authControllers.login,
)
router.post('/refresh-token', authControllers.refreshToken)
router.post(
  '/forget-password',
  zodValidateHandler(authZodSchema.forgetPasswordZodSchema),
  authControllers.forgetPassword,
)
router.post(
  '/reset-password',
  auth(USER_ROLE.ADMIN, USER_ROLE.TRAVELER),
  zodValidateHandler(authZodSchema.resetPasswordZodSchema),
  authControllers.resetPassword,
)
router.patch(
  '/change-password',
  zodValidateHandler(authZodSchema.changePasswordZodSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.TRAVELER),
  authControllers.changePassword,
)

export { router as authRouter }
