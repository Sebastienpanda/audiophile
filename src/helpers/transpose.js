export function transpose(matrix) {
    if (matrix.length === 0) return []
    return matrix[0].map((col, i) => matrix.map((row) => row[i]))
}
