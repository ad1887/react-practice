
import { userData } from "../mockdata/index";

export default (state = userData, action) => {
    switch(action.type) {
      case "Add":
        let res = action.payload;
        return {'data': [res,...state.data]};
        break;
      default:
      return state;   
    }
  }