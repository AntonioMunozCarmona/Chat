import express from'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
      title: 'El Chat de Antonio.com'
    });
});

export default router;
