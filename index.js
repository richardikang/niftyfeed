const functions = require("firebase-functions");
const express = require('express');

const puppeteer = require('puppeteer');
// var connect = require('connect');
// var serveStatic = require('serve-static'); 
// var app = connect(); 

// app.use(serveStatic('../angularjs')); 

// app.listen(5000);
const app = express();

app.get('/', (req, res) => {
async function nft(url) {
const browser = await puppeteer.launch({args:['--no-sandbox',], headless: false});
const page = await browser.newPage();
await page.goto(url);

const [el] = await page.$x('//*[@id="__next"]');
const src = await el.getProperty('src');
const srcTxt = await src.jsonValue();

const[el2] = await page.$x('//*[@id="__next"]');
const txt = await el2.getProperty('textContent');
const rawTxt = await txt.jsonValue();

console.log({srcTxt, rawTxt});   

browser.close();
Nft('https://foundation.app/');
}
});