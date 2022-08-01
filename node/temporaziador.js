const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * *', function(){
    console.log('Executando tarefa 1', new Date().getSeconds());
})

setTimeout(function () {
    tarefa1.cancel()
    console.log("Cancelando tarefa");
}, 2000)