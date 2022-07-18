const fs = require('fs');
const Data = require('../models/data');
const path = require('path');
const { set } = require('mongoose');
const helpers = {};
helpers.saveCSVtoDB = (callback) => {
  return fs.readFile(
    path.resolve('./file.csv'),
    'utf-8',
    async function (err, data) {
      if (!err && data) {
        const arrToInsert = [];
        const linesArr = data.toString().split('\n');
        for (let i = 3; i < linesArr.length; i++) {
          const lineArr = linesArr[i].split(/,(?!\s)/);
          const dataPoint = new Data({
            countryName: lineArr[0],
            countryCode: lineArr[1],
            indicatorName: lineArr[2],
            1990: lineArr[3],
            1991: lineArr[4],
            1992: lineArr[5],
            1993: lineArr[6],
            1994: lineArr[7],
            1995: lineArr[8],
            1996: lineArr[9],
            1997: lineArr[10],
            1998: lineArr[11],
            1999: lineArr[12],
            2000: lineArr[13],
            2001: lineArr[14],
            2002: lineArr[15],
            2003: lineArr[16],
            2004: lineArr[17],
            2005: lineArr[18],
            2006: lineArr[19],
            2007: lineArr[20],
            2008: lineArr[21],
            2009: lineArr[22],
            2010: lineArr[23],
            2011: lineArr[24],
            2012: lineArr[25],
            2013: lineArr[26],
            2014: lineArr[27],
            2015: lineArr[28],
            2016: lineArr[39],
            2017: lineArr[30],
            20018: lineArr[31],
            2019: lineArr[32],
            2020: lineArr[33],
          });
          arrToInsert.push(dataPoint);
        }

        try {
          const dataSaved = Data.insertMany(arrToInsert, (err, docs) => {
            if (err) {
              console.log(err);
              callback(err, 'failed', null)
            } else {
              callback(null, 'success', docs);
            }
          });
        } catch (error) {
          callback(error, 'failed', null)
        }
      } else {
        console.log(err);
      }
    }
  );
};

module.exports = helpers;
