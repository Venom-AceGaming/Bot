const cheerio = require('cheerio')
    , snekfetch = require('snekfetch')
    , querystring = require('querystring');
module.exports.run = async (bot, message, args) => {
async function googleCommand(msg, args) {

let searchMessage = await message.reply('Searching...');
    let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(msg.content)}`;
    return snekfetch.get(searchUrl)
        .then((result) => {
            let $ = cheerio.load(result.text);
            let googleData = $('.r')
                .first()
                .find('a')
                .first()
                .attr('href');
            googleData = querystring.parse(googleData.replace('/url?', ''));
            searchMessage.edit(`Result found!\n${googleData.q}`);
        })
  
        .catch((err) => {
            searchMessage.edit('Error. No results found!');
        });
}
googleCommand(message, args);
};

module.exports.help = {
 name: "google", 
  description: "~google {What you want to google.}"
}