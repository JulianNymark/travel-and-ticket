type FormObject = {
  from: string;
  to: string;
  startTime?: string;
  endTime?: string;
};

export const APISearch = (values: FormObject) => {
  return fetch("https://7g37o3jevtovokfclke4ayesvq0svodb.lambda-url.eu-central-1.on.aws/", {
    method: "POST",
    body: JSON.stringify(values),
  });
};

Math.random()
