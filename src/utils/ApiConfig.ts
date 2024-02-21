const getToken = () => typeof window !== 'undefined' ? sessionStorage.getItem('token') : '';

const handleResponse = async (response: Response) => {
  if (response.status === 401) {
    sessionStorage.clear();
  } else {
    return response.json();
  }
};

const handleToken = (result: any) => {
  if (result?.token) {
    sessionStorage.setItem('token', result?.token);
  }
};

const baseRequest = async (data: any, method: string) => {
  try {
    const token = getToken();
    const reqstValues = {
      method: method,
      body: method !== 'GET' ? JSON.stringify(data.bodyData) : undefined,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token || '',
      },
    };

    const response = await fetch(data?.url, reqstValues);
    const result = await handleResponse(response);

    handleToken(result);
    return result;
  } catch (error) {
    throw error;
  }
};

export const doGetApiCall = async (data: any) => baseRequest(data, 'GET');

export const doPostApiCall = async (data: any) => baseRequest(data, 'POST');

export const doUploadMediaApiCall = async (data: any) => {
  try {
    const token = getToken();
    const reqstValues = {
      method: 'POST',
      body: data?.bodyData,
      headers: {
        Authorization: token || '',
      },
    };

    const response = await fetch(data?.url, reqstValues);
    const result = await handleResponse(response);

    handleToken(result);
    return result;
  } catch (error) {
    throw error;
  }
};

export const doDeleteApiCall = async (data: any) => baseRequest(data, 'DELETE');

export const doPutApiCall = async (data: any) => baseRequest(data, 'PUT');
