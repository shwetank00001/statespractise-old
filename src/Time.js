



function greeting(name){
    const date = new Date()
    const hours = date.getHours()

    let timeofday

    if (hours>4 && hours<12){
        timeofday = 'morning'
    }else if (hours>12 && hours<5){
        timeofday = 'afternoon'
    }else timeofday='night'

    return `Good ${timeofday}, ${name}!`
}



console.log(greeting("Shwetank"))