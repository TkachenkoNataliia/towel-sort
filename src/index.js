// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        let newMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                newMatrix = newMatrix.concat(matrix[i]);
            } else {
                let matrixReversed = matrix[i].reverse();
                newMatrix = newMatrix.concat(matrixReversed);
            }
        }
        return [].concat(newMatrix);
    }
};
