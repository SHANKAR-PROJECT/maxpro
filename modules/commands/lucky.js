module.exports.config = {
  name: "lucky",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Đoán con số may mắn từ 0 đến 5",
  commandCategory: "Game",
  usages: "lucky 5",
    cooldowns: 5,
    dependencies: [],
};

module.exports.run = async ({ event, api, Currencies,args }) => {
 const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
  var data = await Currencies.getData(event.senderID);
  var money = data.money
  var i = 100;
  var number = getRandomInt(0, 5)
  if(money < 5) api.sendMessage("𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗱𝘂̉ 𝘁𝗶𝗲̂̀𝗻 !",event.threadID,event.messageID)
    else {
      if(!args[0]) api.sendMessage("𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝘀𝗼̂́ 𝗱𝘂̛̣ 𝗱𝗼𝗮́𝗻.",event.threadID,event.messageID)
        else{
         if(args[0] > 5) api.sendMessage("𝗗𝘂̛̣ 𝗱𝗼𝗮́𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗱𝘂̛𝗼̛̣𝗰 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝟱.",event.threadID,event.messageID)
           else {
             if(args[0] == number){
                 api.sendMessage(number + " 𝗰𝗵𝗶́𝗻𝗵 𝗹𝗮̀ 𝗰𝗼𝗻 𝘀𝗼̂́ 𝗺𝗮𝘆 𝗺𝗮̆́𝗻, 𝗯𝗮̣𝗻 𝗱𝗮̃ 𝗻𝗵𝗮̣̂𝗻 𝗱𝘂̛𝗼̛̣𝗰 𝟭𝟬𝟬 𝗱𝗼̂😻.", event.threadID, () => Currencies.setData(event.senderID, options = {money: money + parseInt(i)}),event.messageID);
                }
         else api.sendMessage("🌸𝗖𝗼𝗻 𝘀𝗼̂́ 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝗹𝗮̀ " + number + "\n" + "𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝗹𝗮̂̀𝗻 𝘀𝗮𝘂 𝗻𝗵𝗮𝗮𝗮 !\n====𝓛𝓾̛𝓾 𝔂́❤️====\n𝗦𝗮𝘂 𝗺𝗼̂̃𝗶 𝗹𝗮̂̀𝗻 𝗱𝗼𝗮́𝗻 𝘀𝗮𝗶, 𝗯𝗮̣𝗻 𝘀𝗲̃ 𝗯𝗶̣ 𝘁𝗿𝘂̛̀ 𝟭𝟬 𝗱𝗼̂, 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗱𝘂́𝗻𝗴 𝗯𝗮̣𝗻 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗮̣𝗶 𝟭𝟬𝟬 đ𝗼̂.",event.threadID, () => Currencies.setData(event.senderID, options = {money: money - 10}),event.messageID);
      }
    }
  }
};