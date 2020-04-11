const express = require('express');
const path = require('path')
const router = express.Router()
const assert = require('assert')
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbName = 'pantip'
// Create a new MongoClient
const options = { useUnifiedTopology: true }

MongoClient.connect(url, options, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db('');
    const col = db.collection('scoreboard');

    router.get('/', (req, res) => {
        res.render('index', { title: '2222', sub: '3333' })
    })
    router.post('/game', (req, res) => {
        const name = req.body.name
        res.render('game', { name: name })
    })
    router.get('/score', (req, res) => {
        col.find().sort({ fail: 1 }).limit(5).toArray((err, result) => {
            res.render('score', { data: result })
        });
    })

    router.post('/newscore', async (req, res) => {
        const { name, fail } = req.body
        col.insertOne({ name, fail })
    })
});

module.exports = router