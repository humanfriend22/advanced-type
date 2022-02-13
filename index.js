module.exports = (param = undefined) => {
    if (param === null || undefined) return `${param}`;
    else if (typeof param === 'function') {
        if (param.constructor.name === 'AsyncFunction') return 'async-function';
        else if (param.constructor.name === 'GeneratorFunction') return 'generator-function';
        else return 'function';
    }
    else {
        return typeof param === 'number' ? param * 0 !== 0 ? 'NaN' : 'number' : Object.prototype.toString.call(param).replace('[object ').replace('undefined', '').slice(0, -1).toLowerCase();
    }
}
module.exports.multiple = (arr, type = 'any') => {
    if (module.exports(arr) !== 'array') return false;
    let output = [];
    for (const item of arr) output.push(type === 'any' ? type(item) : type(item) === type);
    return output;
}