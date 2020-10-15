export const addToFavorite = (name, url) => {
    const object = localStorage.getItem("item")
    // if (object === null) {
    //     const newObject = { "name": name, "url": url }
    //     localStorage.setItem("item", JSON.stringify(newObject))

    // } else {
    //     const parseObject = JSON.parse(object)
    //     parseObject.map()
    //     //const newObject = parseObject.push({ "name": name, "url": url })
    //     const newObject = [parseObject, { "name": name, "url": url }]

    //     // const newObject1 = [...parseObject, newObject]
    //     localStorage.setItem("item", JSON.stringify(newObject))
    //     console.log(parseObject)


    // }
    console.log(object)

    localStorage.clear()
}