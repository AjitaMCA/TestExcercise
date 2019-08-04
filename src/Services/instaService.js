const fetch = require('isomorphic-fetch')
var request = require('request');
var cheerio = require('cheerio');

var cookie = 'ig_pr=2';
let eleHTML = '';
export const getUserByUsername = (username) => (

    new Promise(function (resolve, reject) {
    console.log('h', username)
        request('http://www.instagram.com/' + username, function (err, resp, html) {
            if (!err) {
                const $ = cheerio.load(html);
                $('body').children().each((i, e) => {
                    eleHTML = $(e).html()
                    if (eleHTML.indexOf('window._sharedData') > -1) {
                        resolve(JSON.parse(eleHTML.split('"ProfilePage":[')[1].split(']},"hostname"')[0]).graphql.user);
                        return false;
                    }
                })
            }
            else {
                reject(err);
            }
        })
    })
);