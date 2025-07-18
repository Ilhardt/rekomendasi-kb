import axios from "axios";

export async function getKeyboardSize(size: number) {
  try {
    const response = await axios.get(
      `http://103.181.142.131:5050/api/keyboard/${size}`
    );

    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
}

export async function getKeyboardReference(url: string) {
  const fullUrl = `http://103.181.142.131:5050/api/keyboard${url}`;
  console.log(fullUrl);
  try {
    const response = await axios.get(
      `http://103.181.142.131:5050/api/keyboard${url}`
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
}
