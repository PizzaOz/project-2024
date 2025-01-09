
let rerenderEntireTree = () => {
    console.log('q')
}

const state = {
    dialogPage: {
        dialog: [
            { id: '1', name: 'Misha' },
            { id: '2', name: 'Vlada' },
            { id: '3', name: 'Dima' },
            { id: '4', name: 'Sergey' },
            { id: '5', name: 'Vladimer' },
        ],
        message: [
            { id: '1', message: 'Hi' },
            { id: '2', message: 'How is it ? ' },
            { id: '3', message: 'Yo' },
            { id: '4', message: 'Boo' },
            { id: '5', message: 'Privet' },
        ],
    },
    profilePage: {
        post: [
            { id: 1, message: 'hi ssss', likeCount: 12 },
            { id: 2, message: 'hi You', likeCount: 14 },
            { id: 3, message: 'hi eee', likeCount: 17 },
            { id: 4, message: 'his eee', likeCount: 3 },
        ],
        newPostText: 'hellou text'
    },
    friendsPage: {
        friends: [
            { friend: 'Sergey', img: "https://static.insales-cdn.com/images/products/1/1979/515671995/large_kotiki_kolpaki_kotiki_fotografichnye_6_shtuk_1501_4985.jpg" },
            { friend: 'Anton', img: "https://711515.selcdn.ru/recycleCDN/main/9/9ead29f7ebb448d64cd47e567738b77a_thumbnail.jpg" },
            { friend: 'Dima', img: "https://ybis.ru/wp-content/uploads/2023/09/kotiki-s-serdechkami-12.webp" },
        ]
    }
}


export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    };
    state.profilePage.post.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state