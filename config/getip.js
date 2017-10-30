/**
 * Created by MingJun on 2017/9/25.
 *
 *          ┌─┐       ┌─┐
 *       ┌──┘ ┴───────┘ ┴──┐
 *       │                 │
 *       │       ───       │
 *       │  ─┬┘       └┬─  │
 *       │                 │
 *       │       ─┴─       │
 *       │                 │
 *       └───┐         ┌───┘
 *           │         │
 *           │         │
 *           │         │
 *           │         └──────────────┐
 *           │                        │
 *           │                        ├─┐
 *           │                        ┌─┘
 *           │                        │
 *           └─┐  ┐  ┌───────┬──┐  ┌──┘
 *             │ ─┤ ─┤       │ ─┤ ─┤
 *             └──┴──┘       └──┴──┘
 *
 *        神兽保佑 （神兽来源与网络） 代码无BUG!
 *
 */
var os = require('os'),
    iptable = {},
    ifaces = os.networkInterfaces();  // 调用OS
for (var dev in ifaces) {
    ifaces[dev].forEach((details, alias) => {
        if (details.family=='IPv4') {
            iptable[dev + (alias ? ':' + alias : '')] = details.address;
        }
    });
}
var yourip = ''
Object.keys(iptable).forEach((val, index) => {
    if(index===0) {
        yourip = iptable[val] ? `http://${iptable[val]}` : 'http://localhost'
    }
})
// console.log('yourip', yourip)
module.exports = yourip
