import * as actionType from "./ActionTypes";

export const increase = () => {
    return {
        type: actionType.ADD,
    }
};

export const multiply = () => {
    return {
        type: actionType.MULTIPLY
    }
};

export const divide = () => {
    return {
        type: actionType.DIVIDE
    }
};

export const subtract = () => {
  return {
      type: actionType.SUBTRACT
  }
};

export const getResult = () => {
    return {
        type: actionType.RESULT
    }
};

export const useNumber = (payload) => {
    return {
      type: actionType.USE_NUMBER,
      payload: payload
    }
};

