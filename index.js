function findMatching(arr, query){
    const result = arr.filter(function(arr){
         if (arr.toUpperCase() === query.toUpperCase())
        return true
        })
         return(result)
}

function fuzzyMatch(arr, string) {
    const result = arr.filter((driverName) => {
    if (string.charAt(0, 2) === driverName.charAt(0, 2)) {
        return true
    }
    })
    return result
}

function matchName(driver, string) {
    return driver.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
    }