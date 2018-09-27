import { CHECKING_STATUS, CHECKING_TIME } from "../actions/types";

const initialState = {
  webs: [
    {
      id: 1,
      url: "https://tnk.auth0.com/.well-known/openid-configuration",
      status: null,
      time: null
    },
    {
      id: 2,
      url: "https://waylar-api-dot-waylar-gateway.appspot.com/ ",
      status: null,
      time: null
    },
    {
      id: 3,
      url: "https://flow-api.waylar.net/",
      status: null,
      time: null
    },
    {
      id: 4,
      url: "https://office-api.waylar.net/",
      status: null,
      time: null
    },
    {
      id: 5,
      url: "https://fbackend1.waylar.net/api/devices",
      status: null,
      time: null
    },
    {
      id: 6,
      url: "https://realtime.waylar.net/socket.io/",
      status: null,
      time: null
    }
  ]
};
export default function checkingReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKING_STATUS:
      console.log("reducer");
      return {
        ...state,
        webs: action.payload
      };
    case CHECKING_TIME:
      return {
        ...state,
        webs: action.payload
      };
    default:
      return state;
  }
}
