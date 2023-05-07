const form = document.getElementById('search-form');
const input = document.getElementById('username');
const userInfo = document.getElementById('user-info');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = input.value;
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      userInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Username: <a href="${data.html_url}" target="_blank">${data.login}</a></p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Public Repositories: ${data.public_repos}</p>
      `;
    })
    .catch(error => console.error(error));
});
