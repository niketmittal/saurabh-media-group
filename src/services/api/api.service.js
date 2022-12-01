import { fetch } from "../fetch.services";
import { API_PATH} from "../../constants/path"
import { AUTH_TOKEN} from '../../constants/token'

export const LocationData = (options) => {
  return fetch("post", API_PATH + `locations/filter`,JSON.stringify(options), {
      token: AUTH_TOKEN,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
}






