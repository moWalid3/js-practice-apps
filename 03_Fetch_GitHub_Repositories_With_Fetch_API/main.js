//

let inp = document.querySelector(".get-repos input"),
  getBtn = document.querySelector(".get-repos button"),
  reposData = document.querySelector(".show-data");

getBtn.onclick = () => {
  getRepos();
};

function getRepos() {
  if (inp.value == "") {
    reposData.innerHTML = `<span>Please write github username!!</span>`;
  } else {
    fetch(`https://api.github.com/users/${inp.value}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        reposData.innerHTML = "";

        data.forEach((repo) => {
          let mainDiv = document.createElement("div");

          let repoName = document.createElement("span");
          repoName.classList.add("repo-name");
          repoName.append(document.createTextNode(repo.name));

          let repoStars = document.createElement("span");
          repoStars.classList.add("repo-stars");
          repoStars.append(
            document.createTextNode("Stars " + repo.stargazers_count)
          );

          let repoUrl = document.createElement("a");
          repoUrl.append(document.createTextNode("Visit"));
          repoUrl.target = "_blank";
          repoUrl.setAttribute(
            "href",
            `https://github.com/${inp.value}/${repo.name}`
          );

          mainDiv.append(repoName);
          mainDiv.append(repoStars);
          mainDiv.append(repoUrl);

          reposData.append(mainDiv);
        });
      })
      .catch((reason) => {
        reposData.innerHTML = "Enter a correct username!!";
      });
  }
}
