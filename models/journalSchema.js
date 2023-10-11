const mongoose = require('mongoose');
const Schema = mongoose.Schema
const model = mongoose.model

const journalSchema = new Schema({
    title:  { type: String, required: true},
    date: {type: String, required: true},
    journalEntry:  { type: String, required: true},

    wasTodayAGoodDay: Boolean,
    rateIt: Number,
});

const Journals = model('Journals', journalSchema);

module.exports = Journals