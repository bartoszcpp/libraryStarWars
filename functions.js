
export const addToFavorite = (name, url, category) => {
    const object = localStorage.getItem("item")
    if (object === null) {
        const newObject = [{ "name": name, "url": url, "category": category }]
        localStorage.setItem("item", JSON.stringify(newObject))

    } else {
        const parseObject = JSON.parse(object)
        const isInStorage = parseObject.findIndex(object => object.name === name)
        if (isInStorage === -1) {
            const newObject = { "name": name, "url": url, "category": category }
            parseObject.push(newObject)
            localStorage.setItem("item", JSON.stringify(parseObject))
        } else {
            parseObject.splice(isInStorage, 1)
            localStorage.setItem("item", JSON.stringify(parseObject))
        }
    }
    console.log(object)

    //localStorage.clear()
}