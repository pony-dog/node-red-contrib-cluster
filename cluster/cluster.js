module.exports = function(RED) {
    RED.nodes.registerType("cluster", function(config) {
        RED.nodes.createNode(this, config)

        var node = this

        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase()
            node.send(msg)
        })
    })
}
