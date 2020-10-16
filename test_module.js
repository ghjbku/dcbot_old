
const testfunc = (param,message) => {
    console.log(`Validate ${param}`);
    message.channel.send("sent");
    message.delete();
}

module.exports = {
    test : testfunc
}