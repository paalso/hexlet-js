const solution = (url='https://hexlet.io') => {
  location.href = url;
  const new_location = location.href;
  const userAgent = window.navigator.userAgent;
  const browserInfo = userAgent.split(' ')[0];
  alert(`${browserInfo} ${url}`);
  return `${browserInfo} ${new_location}`;
}

solution();
