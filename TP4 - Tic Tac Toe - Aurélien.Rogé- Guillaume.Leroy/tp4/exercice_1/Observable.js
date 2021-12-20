class Observable{
    constructor(){
        this.tab = new Array();
    }
    on = function(eventName, callback){
        this.tab.push(new nameWithCallback(eventName, callback))
    }
    off = function(eventName, callback){
        let indexToRemove = this.tab.findIndex(element => element.name == eventName && element.callback == callback);
        while(indexToRemove != -1){
            this.tab.splice(indexToRemove, 1);
            indexToRemove = this.tab.findIndex(element => element.name == eventName && element.callback == callback);
        }
        
    }
    trigger = function(eventName, callback, ...rest){
        this.tab.find(element => element.name == eventName).callback(callback, ...rest);
    }
}

class nameWithCallback{
    constructor(name, callback){
        this.name = name;
        this.callback = callback;
    }
}