const client = global.client;
module.exports = () => {
  console.log("Pâyidar Code Ekonomi Bot Aktif.");
  client.user.setActivity("Pâyidar Code");
}
module.exports.configuration = {
  name: "ready"
}