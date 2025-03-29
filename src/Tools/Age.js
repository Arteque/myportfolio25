const Age = () => {
    const birthDate = new Date("1982-11-29")
    const currentDate = new Date()
    const birthDateInMS =  birthDate.getFullYear()
    const currentDateInMS = currentDate.getFullYear()

    const timeBetween = currentDateInMS - birthDateInMS

    return timeBetween - 1
}

export default Age