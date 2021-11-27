import Flatted from "flatted";

import { HTTP_SERVER_ERROR } from "src/constants/httpStatusCodes";
import { UNEXPECTED_ERROR } from "src/constants/errorMessages";

/**
 * @param {object} err
 * @returns {object} an object containing descriptive error messages
 */
export default (err: any): Record<string, any> => {
  try {
    if (err?.response?.data) {
      return {
        code: err.response?.status ?? HTTP_SERVER_ERROR,
        error:
          typeof err.response?.data === "string"
            ? undefined
            : err.response?.data,
        message:
          typeof err.response?.data === "string"
            ? err.response?.data
            : undefined,
      };
    }
    return {
      code: err?.extensions?.code ?? HTTP_SERVER_ERROR,
      message: err.message ?? UNEXPECTED_ERROR,
      errors: Array.isArray(err) ? err : undefined,
      error: !Array.isArray(err) ? Flatted.stringify(err) : undefined,
    };
  } catch (e) {
    return { code: HTTP_SERVER_ERROR, message: UNEXPECTED_ERROR };
  }
};
