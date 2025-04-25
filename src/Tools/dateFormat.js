const dateFormat = (item) => {
    const lang = document.documentElement.lang
    if(!item) return
    return new Date(item).toLocaleDateString(lang,{weekday:'short', day:'2-digit', month:'short', year:'numeric'}).replace(/,/g,"")
}

export default dateFormat