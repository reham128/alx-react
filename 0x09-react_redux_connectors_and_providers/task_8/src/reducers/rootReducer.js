import notificationReducer, {
  initialNotificationState,
} from "./notificationReducer";
import courseReducer, { initialCourseState } from "./courseReducer";
import { Map } from "immutable";
import uiReducer, { initialUIState } from "./uiReducer";


export const initialRootState = {
  courses: Map(initialCourseState),
  notifications: Map(initialNotificationState),
  ui: Map(initialUIState),
};

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};

export default rootReducer;