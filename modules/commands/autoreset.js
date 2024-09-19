module. exports. config = {
  name: "autoreset",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Thời gian",
  commandCategory: "Hệ thống",
  cooldowns: 5
}
module. exports. handleEvent = async function({ api, event, args, Users,Threads }) {
const moment = require("moment-timezone");
var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
var color = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m','\x1b[31m','\x1b[1m'];
var more = color[Math.floor(Math.random() * color.length)];
var idad = global.config.ADMINBOT;    
var seconds = moment.tz("Asia/Ho_Chi_Minh").format("ss");
var timeRestart_1 = `00:59:${seconds}`
//console.log(timeNowRestart)
if ((timeNow == timeRestart_1) && seconds < 5 ) {
  for( let ad of idad) {
setTimeout(() =>
        api.sendMessage(`${timeNow} Tiến hành reset lại hệ thống,` () =>process.exit(1)), 1000);
  }
  }
}
module. exports. run = async  ({ api, event, args }) => {
    const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
      api.sendMessage(`${timeNow}`, event.threadID)
