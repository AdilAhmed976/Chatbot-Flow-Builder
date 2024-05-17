import {
  ADD_FLOW_DATA,
  DELETE_FLOW_DATA,
  UPDATE_FLOW_DATA,
  INIT_DATA,
} from "../actionsTypes";

const initialState = {
  flowData: { nodes: [], edges: [] },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_DATA:
      return initialState;
    case ADD_FLOW_DATA: {
      return { ...state, flowData: { ...action.value } };
    }
    case UPDATE_FLOW_DATA: {
      return { ...state, flowData: { ...action.value } };
    }
    case DELETE_FLOW_DATA: {
      return { ...state, flowData: { ...initialState.flowData } };
    }

    default:
      return state;
  }
};

export default reducer;
