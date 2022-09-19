const download = require('./src/download');
const torrentParser = require('./src/torrentParser');

const torrent = torrentParser.open("Father Stu.torrent");

download(torrent, torrent.info.name);