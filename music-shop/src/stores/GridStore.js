import { EventEmitter } from "events";
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ActionTypes from '../actions/ActionTypes.js';

class GridStore extends EventEmitter {

    getImgs(){
        return _imgs;
    }

    emitChange(){
        this.emit('change');
    }

    addChangeListener(callback){
        this.on('change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }
}
    
    gridStore = new GridStore();

    AppDispatcher.register(function callback({action}) {
        switch (action.actionType){
            case ActionTypes.FILL_GRID:
            //call server here
            gridStore.emitChange();
            break;

            default:
                return true;
        }
    });

    export default gridStore;