var fs = require('fs')
var data = 'Node.js是一個能夠在伺服器端運行JavaScript的開放原始碼、跨平台JavaScript 執行環境。Node.js由Node.js基金會持有和維護[3]，並與Linux基金會有合作關係[4]。Node.js採用Google開發的V8執行程式碼，使用事件驅動、非阻塞和 非同步輸入輸出模型等技術來提高效能，可優化應用程式的傳輸量和規模。這些技術通常用於資料密集的實時應用程式。'

var writerStream = fs.createWriteStream('.\\lab9_stream\\output.txt')
writerStream.write(data,'UTF8')
writerStream.end()

writerStream.on('finish',function(){
    console.log('write complete')
})
writerStream.on('error',function(){
    console.log(err.stack)
})
console.log('program termianted')