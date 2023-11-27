export type Cell = 'x' | 'o' | null;
export type InitialState = [
    Cell,
    Cell,
    Cell,
    Cell,
    Cell,
    Cell,
    Cell,
    Cell,
    Cell,
];
export type AvailableMoves = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type BoardProps = {
    state: InitialState;
    onCell: (index: number) => void;
};

export type BoardElementType = {
    item: Cell;
    index: number;
    onCell: () => void;
};

//
//
//
export const isEmpty = (state: InitialState): boolean => {
    return state.every((cell) => cell === null);
};

export const isFull = (state: InitialState): boolean => {
    return state.every((cell) => cell !== null);
};

export const getAvalibleMove = (state: InitialState): AvailableMoves[] => {
    const moves: AvailableMoves[] = [];
    state.forEach((cell, index) => {
        if (cell === null) {
            moves.push(index as AvailableMoves);
        }
    });
    return moves;
};
