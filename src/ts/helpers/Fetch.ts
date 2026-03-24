const getData = async (url: string, authToken?: string): Promise<object> => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      method: 'GET',
    });
    if (!res.ok) {
      const err = await res.json();
      return {
        message: `${err.message}. Error: ${res.status + ' ' + res.statusText}`,
      };
    }
    return await res.json();
  } catch (error) {
    console.log((error as Error).message);
    alert((error as Error).message);
    throw error;
  }
};

const postData = async (
  url: string,
  body: object,
  authToken?: string,
): Promise<object> => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : '',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const err = await res.json();
      return {
        message: `${err.message}. Error: ${res.status + ' ' + res.statusText}`,
      };
    }
    return await res.json();
  } catch (error) {
    console.log((error as Error).message);
    alert((error as Error).message);
    throw error;
  }
};

export { getData, postData };
