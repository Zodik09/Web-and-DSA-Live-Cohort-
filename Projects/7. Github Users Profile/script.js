const username = document.querySelector("#username");
const submit = document.querySelector("button[type = 'submit']");
const form = document.querySelector("#githubForm");
const userDetails = document.querySelector("#userDetails");

function getData(username) {
    return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if (!raw.ok) throw new Error("User not found!!!");
        else return raw.json();
    });
}
function showData(data) {
    console.log(data);

    const { avatar_url, name, bio, login, location,
        public_repos, followers, following, html_url, blog, public_gists

    } = data;
    let show = `<div class="flex items-center space-x-4">
                <img id="avatar" src="${avatar_url}" alt="Avatar" class="w-16 h-16 rounded-full border border-gray-700">
                <div>
                    <h2 id="name" class="text-lg font-bold text-gray-100">${name ? name : "N/A"}</h2>
                    <p id="bio" class="text-sm text-gray-400">${bio ? bio : "N/A"}</p>
                </div>
            </div>
            <div class="mt-4">
                <p><span class="font-medium text-gray-300">Username:</span> <span id="username-display" class="text-gray-400">${login ? login : "N/A"}</span></p>
                <p><span class="font-medium text-gray-300">Location:</span> <span id="location" class="text-gray-400">${location ? location : "N/A"}</span></p>
                <p><span class="font-medium text-gray-300">Gists:</span> <span id="following" class="text-gray-400">${public_gists ? public_gists : "N/A"
        }</span></p>
                <p><span class="font-medium text-gray-300">Public Repos:</span> <span id="repos" class="text-gray-400">${public_repos ? public_repos : "N/A"}</span></p>
                <p><span class="font-medium text-gray-300">Followers:</span> <span id="followers" class="text-gray-400">${followers ? followers : "N/A"}</span></p>
                <p><span class="font-medium text-gray-300">Following:</span> <span id="following" class="text-gray-400">${following ? following : "N/A"}</span></p>
                <p><a href="${blog ? blog : "N/A"}" target="_blank" class="font-medium text-gray-300">Portfolio:</span> <span id="following" class="text-gray-400">${blog ? blog : "N/A"}</span></a>
            </div>
            <a id="profile-link" href="${html_url ? html_url : "N/A"
        }" target="_blank" class="block mt-4 text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                View Profile on GitHub
            </a>`
    userDetails.innerHTML = show;
}

submit.addEventListener('click', () => {
    event.preventDefault();
    let user = username.value.trim().toLowerCase();
    getData(user).then(data => showData(data));
})