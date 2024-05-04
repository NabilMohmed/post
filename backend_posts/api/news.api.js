const { auth } = require("../middleware/authentication/auth");
const { addnews, allnews, userNews, Update, deleteNews } = require("../services/news.service");

const router = require("express").Router();

router.post('/',auth,addnews);
router.get('/',auth,allnews);
router.get('/userNews',auth,userNews)
router.put('/',auth,Update)
router.delete('/',auth,deleteNews)

module.exports = router;
