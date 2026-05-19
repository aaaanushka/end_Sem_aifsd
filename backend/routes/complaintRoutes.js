const router = require("express").Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

    addComplaint,
    getComplaints,
    updateComplaint,
    searchComplaint

} = require("../controllers/complaintController");

router.post(
    "/",
    authMiddleware,
    addComplaint
);

router.get(
    "/",
    authMiddleware,
    getComplaints
);

router.put(
    "/:id",
    authMiddleware,
    updateComplaint
);

router.get(
    "/search/location",
    authMiddleware,
    searchComplaint
);

module.exports = router;