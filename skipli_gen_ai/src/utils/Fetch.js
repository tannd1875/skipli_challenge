export function FetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response not 200 OK");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export function PostData(url, body) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => {
    console.log(response.ok);
    return response.ok;
  });
}
