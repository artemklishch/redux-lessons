export const users = [
    {
        id: 'id-0',
        age: 21,
        name: 'Bob',
    },
    {
        id: 'id-1',
        age: 17,
        name: 'Tom',
    },
    {
        id: 'id-2',
        age: 18,
        name: 'Tad',
    },
    {
        id: 'id-3',
        age: 45,
        name: 'Justin',
    },
    {
        id: 'id-4',
        age: 45,
        name: 'Franklin',
    },
    {
        id: 'id-5',
        age: 45,
        name: 'John',
    },
    {
        id: 'id-6',
        age: 45,
        name: 'Andrew',
    },
    {
        id: 'id-7',
        age: 45,
        name: 'Pol',
    },
    {
        id: 'id-8',
        age: 45,
        name: 'Ron',
    },
    {
        id: 'id-9',
        age: 45,
        name: 'Harry',
    },
    {
        id: 'id-10',
        age: 45,
        name: 'Anna',
    },
];

const usersState = {
    usersList: [
        {
            id: 'id-0',
            age: 21,
            name: 'Bob',
        },
        {
            id: 'id-1',
            age: 17,
            name: 'Tom',
        },
        {
            id: 'id-2',
            age: 18,
            name: 'Tad',
        },
    ],
    currentPage: 1
};

export default (state = usersState, action) => {
    const itemsPerPage = 3;
    const start = state.currentPage;
    switch (action.type) {
        case 'GO_NEXT': return {
            currentPage: state.currentPage + 1,
            usersList: users.slice(start, start + itemsPerPage)
        };
        case 'GO_PREV': return {
            currentPage: state.currentPage - 1,
            usersList: users.slice((state.currentPage * 3 - 3), state.currentPage * 3)
        };
        default: return state;
    };
};