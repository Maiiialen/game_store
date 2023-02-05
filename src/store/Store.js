import { create } from 'zustand'
import { devtools } from "zustand/middleware"

function add(game, number, state) {
    console.log(game)
    state.cart = state.cart.concat({ game: game, number: number })
    return state
}

function remove(game, state) {
    state.cart = state.cart.filter(function (element) { return element.game !== game })
    console.log(state.cart)
    return state
}

function increase(game, state) {
    let index = state.cart.findIndex((product) => game === product.game)
    state.cart[index].number += 1
    console.log(state.cart)
    return state
}

function decrease(game, state) {
    let index = state.cart.findIndex((product) => game === product.game)
    state.cart[index].number -= 1
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
    increaseNumber: (game) => set((state) => increase(game, state)),
    decreaseNumber: (game) => set((state) => decrease(game, state)),
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