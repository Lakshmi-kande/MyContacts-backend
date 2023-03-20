const express=require("express");
const router= express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    getContactbyphone,
}=require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken)
router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)
router.route("/:phone").get(getContactbyphone)

module.exports=router;
