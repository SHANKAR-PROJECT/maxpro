const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "alobot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "alobot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["𝒃𝒂̣𝒏 𝒈𝒐̣𝒊 𝒕𝒐̛́ 𝒄𝒐́ 𝒗𝒊𝒆̣̂𝒄 𝒈𝒊̀ 𝒌 ",  "Tớ đây~~~~",  "𝐛𝐚𝐞 𝐠𝐨̣𝐢 𝐭𝐨̛́ 𝐜𝐨́ 𝐯𝐢𝐞̣̂𝐜 𝐠𝐢̀ 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐞̀", "Gọi tớ có việc gì không dạ "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("mi ngu ý tự nhiên chửi tau?", threadID);
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("không bé ơi😌", threadID);
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("không bé ơi bé cút TRC đi nè 😌", threadID);
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage(" Bạn xàm quá....!?", threadID);
  };
  
  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("á à con chó này nói xấu bố à mấy dạy🥲", threadID);
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("đĩ nào vừa chửi tau vậy 😼", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️chửi ai đấy nhóc con ? bố mẹ mày k dạy dạy mày à ? thứ ngu học còn não chó nữa 🥲 thứ k có người dậy 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con đĩ bố mmày nhịn mày lâu lắm rồi đấy nhá muốn ăn vả k con tó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con chó 😼 bố mmày nhịn mày lâu lắm rồi đấy nhá chửi con cặc nè thứ súc vật k bằng chó 😼", threadID);
  };
  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ hihi cảm ơn cậu ạ ♥️ cảm ơn vì đã khen mình nhé mình cảm ơn ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy sủa lại bố mày nghe nào :) nít ranh mà cứ thích sồn :) loại dell có não đ chửi bot ? chả khác gì mi dell bằng tau ....? à thậm chí mi dell bằng con chó ý", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("không bé ơi? no no và no ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("ủa đây là địa bàn của mình sao mình phải cút ? quê vậy tèng ơi", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi thứ quê  mày chửi tau trc đó con ạ 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nCậu mà có bồ trc tớ cậu ăn cuk", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }