import { CHECKING_STATUS, CHECKING_TIME } from "./types";

export const checkingStatus = webs => async dispatch => {
  let newWebs = [];
  for (let index = 0; index < webs.length; index++) {
    await fetch(webs[index].url)
      .then(res => {
        console.log(res.time);
        const web = { id: index, url: res.url, status: res.status, time: null };
        newWebs = newWebs.concat(web);
      })
      .catch(error => {
        console.log(error);
      });
  }
  console.log(newWebs);
  dispatch({
    type: CHECKING_STATUS,
    payload: newWebs
  });
};

export const checkingTime = webs => async dispatch => {
  let newWebs = [];
  for (let index = 0; index < webs.length; index++) {
    let start_time = new Date().getTime();
    await fetch(webs[index].url)
      .then(res => {
        let timeresponse = new Date().getTime() - start_time;
        const web = {
          id: index,
          url: res.url,
          status: res.status,
          time: timeresponse
        };
        newWebs = newWebs.concat(web);
      })
      .catch(error => {
        console.log(error);
      });
  }
  console.log(newWebs);
  dispatch({
    type: CHECKING_TIME,
    payload: newWebs
  });
};
