

module.exports.getDate = function(){
    const toDay = new Date()

    const options = {
        weekly: 'long',
        day: 'numeric',
        month: 'long'
    }
    return toDay.toLocaleDateString('en-US', options)
}

module.exports.getDay = function(){

    const today = new Date()

    const options = {
        weekday: 'long'
    }

    return today.toLocaleDateString("en-US", options)
}

