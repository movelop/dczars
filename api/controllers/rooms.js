import Room from '../models/Room.js';

export const createRoom = async (req, res, next) => {
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
};
export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
            $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
            },
        }
        );
        res.status(200).json("Room status has been updated.");
    } catch (error) {
        next(error);
    }
};

export const cancelRoomReservation = async (req, res, next) => {
    try {
        // Check if the req.params.id is valid and exist.
        const room = await Room.findOne({ "roomNumbers._id": req.params.id });
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        // Check if the room has the "unavailableDates" field
        let roomNumber = room.roomNumbers.find(number => number._id == req.params.id);
        if (!roomNumber.unavailableDates) {
            return res.status(404).json({ message: "This room doesn't have unavailableDates field" });
        }
        // Update the room's unavailableDates field
        await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            { $pull: { "roomNumbers.$.unavailableDates": { $in: req.body.dates } } }
        );
        res.status(200).json({ message: "Room Status has been updated" });
    } catch (error) {
        next(error);
    }
};


export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body}, { new: true });
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    }
};
export const deleteRoom = async (req, res, next) => {
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json('Room deleted');
    } catch (error) {
        next(error);
    }
};
export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (error) {
        next(error);
    }
};
export const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find().sort({ 'price' : 1});
        res.status(200).json(rooms);
    } catch (error) {
        next(error);
    }
};
