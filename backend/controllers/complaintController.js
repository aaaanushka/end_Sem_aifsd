const Complaint = require("../models/Complaint");

exports.addComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.create(req.body);

        res.status(201).json({
            message: "Complaint Added",
            complaint
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
};

exports.getComplaints = async (req, res) => {

    const complaints = await Complaint.find();

    res.json(complaints);
};

exports.updateComplaint = async (req, res) => {

    const complaint = await Complaint.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(complaint);
};

exports.searchComplaint = async (req, res) => {

    const complaints = await Complaint.find({
        location: req.query.location
    });

    res.json(complaints);
};