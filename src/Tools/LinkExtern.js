const LinkExtern = (links) => {
    links.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault()
                console.log(e.target)
            })
    })
}

export default LinkExtern