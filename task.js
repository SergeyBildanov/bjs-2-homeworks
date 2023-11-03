const validHHMMstring = (str) => /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(str);
class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback){
        if(!(validHHMMstring(time)) || callback === undefined){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        for(let i=0; i<this.alarmCollection.length; i++){
            if(this.alarmCollection[i].time === time){
                console.warn('Уже присутствует звонок на это же время');
            }
        }
        let alarmObject = {};
        alarmObject.callback = callback;
        alarmObject.time = time;
        alarmObject.canCall = true;
        this.alarmCollection.push(alarmObject)
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
    }
    getCurrentFormattedTime(){
        let date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    start(){
        if(this.intervalId){
            return 0;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(element => {
                if((element.time === this.getCurrentFormattedTime()) && element.canCall === true){
                    element.canCall = false;
                    element.callback();
                }
            });
        }, 1000);
    }
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(element => {
                element.canCall = true;
        });
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}