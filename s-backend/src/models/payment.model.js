import mongoose from "mongoose";
import priceSchema from "./price.schema.js";

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    razorpay: {
        orderId: { type: String, required: true },
        paymentId: { type: String },
        signature: { type: String }
    },
    price: {
        type: priceSchema,
        required: true
    },
    orderItems: [
        {
            title: { type: String },
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
            variantId: { type: mongoose.Schema.Types.ObjectId },
            quantity: { type: Number },
            images: [
                {
                    url: { type: String }
                }
            ],
            description: { type: String },
            price: { type: priceSchema }
        }
    ],
    status: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    }
}, { timestamps: true });

const paymentModel = mongoose.model('payment', paymentSchema);

export default paymentModel;
