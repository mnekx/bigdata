const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    countryName: {
        type: String,
        required: false
    },
    countryCode: {
        type: String,
        required: false
    },
    indicatorName: {
        type: String,
        required: false
    },
    1990: {
        type: String,
        required: false
    },
    1991: {
        type: String,
        required: false
    },
    1992: {
        type: String,
        required: false
    },
    1993: {
        type: String,
        required: false
    },
    1994: {
        type: String,
        required: false
    },
    1995: {
        type: String,
        required: false
    },
    1996: {
        type: String,
        required: false
    },
    1997: {
        type: String,
        required: false
    },
    1998: {
        type: String,
        required: false
    },
    1999: {
        type: String,
        required: false
    },
    2000: {
        type: String,
        required: false
    },
    2001: {
        type: String,
        required: false
    },
    2002: {
        type: String,
        required: false
    },
    2003: {
        type: String,
        required: false
    },
    2004: {
        type: String,
        required: false
    },
    2005: {
        type: String,
        required: false
    },
    2006: {
        type: String,
        required: false
    },
    2007: {
        type: String,
        required: false
    },
    2008: {
        type: String,
        required: false
    },
    2009: {
        type: String,
        required: false
    },
    2010: {
        type: String,
        required: false
    },
    2011: {
        type: String,
        required: false
    },
    2012: {
        type: String,
        required: false
    },
    2013: {
        type: String,
        required: false
    },
    2014: {
        type: String,
        required: false
    },
    2015: {
        type: String,
        required: false
    },
    2016: {
        type: String,
        required: false
    },
    2017: {
        type: String,
        required: false
    },
    2018: {
        type: String,
        required: false
    },
    2019: {
        type: String,
        required: false
    },
    2020: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Data', dataSchema);