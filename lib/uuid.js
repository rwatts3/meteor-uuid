uuid = uuid || {}; // exported

/**
* @method uuid.new
* @public
* @returns {String}
*/
uuid.new = () => {
    let d = new Date().getTime()
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    })
    return uuid;
};

/**
* @method uuid.tiny
* @public
* @returns {String}
*/
uuid.tiny = () => {
    let shortuuid = function () {
    	return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
    }
    return shortuuid();
};

export default uuid;