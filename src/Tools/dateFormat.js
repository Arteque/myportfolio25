const dateFormat = (item) => {
    if(!item) return
    return new Date(item).toLocaleDateString("de-DE",{weekday:'short', day:'2-digit', month:'short', year:'numeric'}).replace(/,/g,"")
}

export default dateFormat