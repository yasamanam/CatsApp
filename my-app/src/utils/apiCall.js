import axios from "axios";

/**
 * @description apiCall is a function for dispatching async actions which is used in redux actions.
 * when the promise resolves it can have three states: 1.loading 2.success 3.fail
 */

export const apiCall = ({
  actionType,
  method,
  url,
  data,
  onSuccessCustomCallBack,
}) => {
  return (dispatch) => {
    dispatch({ type: `${actionType}_LOADING` });
    /**
     * Api call with axios
     */
    axios({
      method: method,
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
      url,
      data: data,
    })
      .then((res) => {
        /**
         * dispatch the success action to share the response
         */
        dispatch({ type: `${actionType}_SUCCESS`, payload: res.data });
      })
      .catch((err) => {
        /**
         * dispatch fail action to share error response
         */
        dispatch({
          type: `${actionType}_FAIL`,
          payload: JSON.stringify(err.response),
        });
      });
  };
};
