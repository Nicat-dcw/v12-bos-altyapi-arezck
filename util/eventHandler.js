const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
    client.on("message", reqEvent("message"));
    client.on("ready", () => reqEvent("ready")(client, "message"));
    client.on("message", reqEvent("msg"))
}