import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    roomTitle: {
        type: String,
        required: true,
    },
    adults: {
        type: Number,
        required: true,
    },
    children: {
        type: Number,
        default: 0,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    numberOfRooms: {
        type: Number,
        required: true,
    },
    selectedRooms: {
        type: [String]
    },
    roomNumbers: {
        type: [Number],
    },
    price: {
        type: Number, 
        required: true 
    },
    paymentReference: {
        type: String,
    },
    confirmation: {
        type: String,
        required: true,
    },
    cancelled: {
        type: Boolean,
        default: false,
    },
    identity: {
        type: String,
    },
}, { timestamps: true });

export default mongoose.model('Booking', BookingSchema);