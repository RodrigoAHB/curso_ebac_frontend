document.addEventListener('DOMContentLoaded', function(){
    const name = document.getElementById('name')
    const username = document.getElementById('username')
    const avatar = document.getElementById('avatar')
    const repos = document.getElementById('repos')
    const followers = document.getElementById('followers')
    const following = document.getElementById('following')
    const githubLink = document.getElementById('githubLink')

    fetch('https://api.github.com/users/RodrigoAHB')
        .then(function(res){
            return res.json()
        }).then(function(res){
            console.log(res)
            avatar.src = res.avatar_url
            username.innerText = res.login
            name.innerText = res.name
            repos.innerText = res.public_repos
            followers.innerText = res.followers
            following.innerText = res.following
            githubLink.href = res.html_url
        }).catch
})