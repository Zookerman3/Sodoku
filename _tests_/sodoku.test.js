import Rows from "./../sodoku"

describe('Rows', () => {

    test("should grab values from an array and check if there are any repeat numbers", () =>{
        const row = new Rows(5,3,7);
        expect(row.rowSpot1).toEqual(5);
        expect(row.rowSpot2).toEqual(3);
        expect(row.rowSpot3).toEqual(7);
    });
});