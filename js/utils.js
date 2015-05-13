/**
 * Retrieve a random item from an array
 * @param {Array} array
 * @param {Boolean} [remove=true] - true to remove the item from the array
 * @returns {*}
 */
function rndItem(array, remove) {
    remove = typeof remove === 'undefined' ? true : remove;
    var item;

    if (remove) {
        item = array.splice(_.random(0, array.length - 1), 1)[0];
    } else {
        item = array[_.random(0, array.length - 1)];
    }

    return item;
}
