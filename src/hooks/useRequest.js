import { message } from "antd";

const { REACT_APP_BASE_URL } = process.env;

const info = (type, text) => {
  message[type](text);
};

const warning = (err) => {
  message.warning(err || "Something went Wrong");
};

export const useRequest = () => {
  const request = async ({
    url,
    method = "GET",
    body,
    token,
    headers = {},
  }) => {
    if (method === "POST") headers["Content-Type"] = "application/json";
    if (token) headers["Content-Type"] = "application/json";

    const options = {
      method,
      headers,
      body: JSON.stringify(body),
    };

    try {
      await fetch(`${REACT_APP_BASE_URL}${url}`, options).then((res) => {
        res.json();
      });
    } catch (err) {
      warning(err);
    }
  };
};
export default useRequest;
