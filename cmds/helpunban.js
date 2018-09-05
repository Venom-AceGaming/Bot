module.exports.run = async (bot, message, args) => {
  message.channel.send(`I see you need help with unbanning people? So first you need to do ~{ID} Make sure to get their ID. Then put a reason like this. M>unban 310104172500615168 {test}.`);
}
module.exports.help = {
  name: 'helpunban',
  description: ' E.G. ~helpunban'
}