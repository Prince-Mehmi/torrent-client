const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./src/tracker');

// provide path to torrent file
const torrent = bencode.decode(fs.readFileSync('Father Stu.torrent'));

tracker.getPeers(torrent, peers => {
  console.log('list of peers: ', peers);
});