import { request } from "@penta-b/ma-lib";

const callAddService = async (data, action, errorNotification) => {

  try {
    const response = await request.post("/api/update/add/v2",data);
    return action(response);
  } catch (error) {
    return errorNotification(error);
  }
};

export default callAddService;
