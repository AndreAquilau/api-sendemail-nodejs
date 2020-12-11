import { Router } from 'express';
import EmailController from '../controllers/EmailController';

const router = Router();
router.get('/', (req, res) => {
  try {
    return res.status(200).json({
      api: 'API Node Email Online',
    });
  } catch (err) {
    return res.status(401).json({
      errors: [err],
    });
  }
});
router.post('/email', EmailController.store);

export default router;
