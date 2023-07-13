import { messageUserType } from "../../constants/chatHistoryConstants";

class StoreHelpers {

  /**
   * Returns a string with a user name, depending on its type
   * @param type - the user type
   */
  static getUsernameByType = (type, username) => {

    switch (type) {
      case (messageUserType.user):
        return username;

      case (messageUserType.fred):
        return "Fred";

      default:
        return "System";
    }

  }

}

export default StoreHelpers;

