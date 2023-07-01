import Event from "eventemitter2";


import { EventListenerMap, Listener } from "../../core";
import {eventKeys, AppEventListnerMap, evMap } from "./registry";


class AppEventManager extends Event {

    constructor(eventListenerMap: EventListenerMap){
        super();
        this.register(eventListenerMap);
    }

    public register = async (eventListenerMap: EventListenerMap): Promise<void> => {
        Object.keys(eventListenerMap).forEach((key: string) => {
            const listeners: Listener[] | Listener = eventListenerMap[key]

            if(Array.isArray(listeners)){
                listeners.forEach((listener: Listener) => {
                    this.on(key, listener)
                })
            }else{  
                this.on(key, listeners)
            }
        })
    }

    public disPatchWithoutValues = async <T extends eventKeys = eventKeys>(event: T): Promise<void> =>{
        this.emit(event);
    }

    public dispatch = 
    async <T extends eventKeys = eventKeys>(
        event: T, 
        values: AppEventListnerMap[T]
    ): Promise<void> => {
        this.emit(event , ...values)
    }
}


const { dispatch, disPatchWithoutValues } = new AppEventManager(evMap);
export { disPatchWithoutValues, dispatch }
