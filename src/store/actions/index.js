import {
  ADD_FLOW_DATA,
  DELETE_FLOW_DATA,
  INIT_DATA,
  UPDATE_FLOW_DATA,
} from "../actionsTypes";

export const initData = () => {
  return {
    type: INIT_DATA,
    value: null,
  };
};

export const addFlowData = (data) => {
  return {
    type: ADD_FLOW_DATA,
    value: data,
  };
};

export const updateFlowData = (data) => {
  return {
    type: UPDATE_FLOW_DATA,
    value: data,
  };
};

export const deleteFlowData = (data) => {
  return {
    type: DELETE_FLOW_DATA,
    value: data,
  };
};
