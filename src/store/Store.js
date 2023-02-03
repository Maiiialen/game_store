import { create } from 'zustand'
import { devtools } from "zustand/middleware"

function add(game, number, state) {
    console.log(game)
    state.cart = state.cart.concat({ game: game, number: number })
    return state
}

function remove(game, state) {
    state.cart = state.cart.filter(function (element) { return element.game === game })
    return state
}

const useStore = create(devtools((set) => ({
    cart: [{
        game: {
            name: "A Hat in Time",
            image: "aHatInTime.jfif",
            price: 40,
        },
        number: 2
    }],
    addToCart: (game, number) => set((state) => add(game, number, state)),
    removeFromCart: (game) => set((state) => remove(game, state)),
        // increaseNumber: (game) => set((state) => () => {
        //     console.log(Array.isArray(state.cart))
        //     state.cart[state.cart.findIndex(element => element.game === game)].number += 1
        //     console.log(state.cart)
        //     return state.cart
        // }),
        // decreaseNumber: (game) => set((state) => ({ cart: state.cart[state.cart.findInxed((obj => obj.game === game))].number -= 1 })),
        games: [
        {
            name: "A Hat in Time",
            image: "aHatInTime.jfif",
            price: 40,
        },
        {
            name: "Celeste",
            image: "Celeste.png",
            price: 40,
        },
        {
            name: "Darkest Dungeon",
            image: "DarkestDungeon.jpg",
            price: 30,
        },
        {
            name: "Elden Ring",
            image: "eldenRing.webp",
            price: 80,
        },
        {
            name: "Factorio",
            image: "factorio.png",
            price: 35,
        },
    ],
})))

export default useStore;