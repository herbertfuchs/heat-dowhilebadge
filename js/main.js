
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