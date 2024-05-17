import { connect } from "react-redux";
import {
  addFlowData,
  deleteFlowData,
  initData,
  updateFlowData,
} from "./actions";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    _initData: (data) => {
      dispatch(initData(data));
    },
    _addFlowData: (data) => {
      dispatch(addFlowData(data));
    },
    _updateFlowData: (data) => {
      dispatch(updateFlowData(data));
    },
    _deleteFlowData: (data) => {
      dispatch(deleteFlowData(data));
    },
  };
};

export const stateConnected = (Component) => {
  let ExportComponent = (props) => {
    return <Component {...props}></Component>;
  };
  return connect(mapStateToProps, mapDispatchToProps)(ExportComponent);
};
