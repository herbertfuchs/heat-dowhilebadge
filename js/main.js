
const LinksSocialMedia = {
    github: "herbertfuchs",
    youtube: "UCRMVaMTIikZPxQq4yVvrhTg",
    facebook: "maykbrito",
    instagram: "herbert.marcelo",
    twitter: "roredoclin"
}

function changeSocialMediaLinks(){
    for (let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()


function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

// o fetch se redireciona a URL, pega a resposta e armazena.
// -> transformou essa resposta em JSON, e virou uma nova resposta
// Agora o DATA ARMAZENA essa resposta em JSON
    fetch(url).then(response => response.json()).then(data => alert(data.bio))
}

getGitHubProfileInfos()




