import { REST_API_METHOD as METHOD, BASE_URL } from "../container";
const API_SCHEME = {
  STUDENT: {
    GET_STUDENT: {
      url: `${BASE_URL}/student`,
      method: METHOD.GET,
    },
    ADD_STUDENT: {
      url: `${BASE_URL}/student`,
      method: METHOD.POST,
    },
    DEL_STUDENT: {
      url: `${BASE_URL}/student/:id`,
      method: METHOD.DELETE,
    },
    PUT_STUDENT: {
      url: `${BASE_URL}/student/:id`,
      method: METHOD.PUT,
    },
    IMPORT_EXCEL: {
      url: `${BASE_URL}/student/excel`,
      method: METHOD.GET,
    },
    // DELETE_STUDENT: {
    //   url: `${BASE_URL}/`,
    //   method: METHOD.DELETE,
    // },
    // UPDATE_STUDENT: {
    //   url: `${BASE_URL}/`,
    //   method: METHOD.PUT,
    // },
  },
};

export default API_SCHEME;
