const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);

router.get('/contacts', contactController.getContacts);
router.post('/contacts', contactController.createContact);
router.get('/contacts/:id', contactController.getContact);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
