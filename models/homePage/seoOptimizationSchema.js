const mongoose = require('mongoose');
const {Schema} = mongoose;

const homePageSeoOptimizationSchema = new Schema({
    page_title: {type: String, required: true},
    meta_title: {type: String, required: true},
    meta_description: {type: String, required: true},
    meta_keywords: {type: String, required: true},
    meta_url: {type: String, required: true},
    meta_img: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('HomePageSeoOptimization', homePageSeoOptimizationSchema);