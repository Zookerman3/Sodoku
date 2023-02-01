

export function Rows(rowSpot1, rowSpot2, rowSpot3){
    this.rowSpot1 = rowSpot1
    this.rowSpot2 = rowSpot2
    this.rowSpot3 = rowSpot3
}

export const checkDuplicate = function(array){
     if (new Set(array).size !== array.length){
        return false;
     } else {return true}
};
    