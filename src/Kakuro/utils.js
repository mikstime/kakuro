import _ from 'lodash'

//https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/
export const rotate90clockwise = matrix => {

    if( !_.isArray( matrix ) || ~_.findIndex( matrix, e => !_.isArray( e ) ) )
        throw new Error(`Expected Array of Arrays`)

    const width = matrix.length
    const height = matrix[0].length

    for( let x = 0; x < width / 2; x++ ) {

        for( let y = x; y < height - x - 1; y++ ) {
            // store current cell in temp variable
            let temp = matrix[x][y];
            // move values from right to top
            matrix[x][y] = matrix[y][width-1-x];
            // move values from bottom to right
            matrix[y][width-1-x] = matrix[width-1-x][height-1-y];
            // move values from left to bottom
            matrix[width-1-x][height-1-y] = matrix[height-1-y][x];
            // assign temp to left
            matrix[height-1-y][x] = temp;
        }
    }
    return matrix;
}

export const Sequences = arr => {

    if( !_.isArray( arr ) )
        throw new Error(`Expected instance of Array.`)

    if( _.isEmpty(arr) )
        return []

    return arr.reduce( ( res, cur, i ) => {
        if( i === 0 )
            return res;
        if( _.isEqual( cur, _.last(res).value ) )
            _.last( res ).count++
        else
            res.push({ value : cur, count : 1, } )
        return res;

    }, [{ value : arr[0], count : 1 },] )
}


export const rectangleMatrix = ( matrix, fillElement ) => {

    const  max_row = _.maxBy( matrix, 'length').length

    return matrix.map( r => {
        while( r.length < max_row )
            r.push( fillElement );
        return r;
    })
}

export const rectangleMatrixEnd = ( matrix, fillElement ) => {

    const  max_row = _.maxBy( matrix, 'length').length

    return matrix.map( r => {
        while( r.length < max_row )
            r.unshift( fillElement );
        return r;
    })
}