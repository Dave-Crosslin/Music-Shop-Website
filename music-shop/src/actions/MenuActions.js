import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ActionTypes from '../actions/ActionTypes.js';

const MenuActions = {
    fillGrid(){
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.FILL_GRID,
        });
    },
};

export default MenuActions;