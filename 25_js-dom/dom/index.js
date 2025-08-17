const reformatBody = () => {
  const body = document.body.innerHTML;
  const lines = body.split('\n');
  const processedLines = lines
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `<p>${line.trim()}</p>`);
  const newBody = processedLines.join('');
  alert(newBody);
  document.body.innerHTML = newBody;
};

reformatBody();
