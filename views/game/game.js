const answer = ['#ans_1', '#ans_2', '#ans_3', '#ans_4']
let pointer = 0
let fail = 0
let question = []

$(document).ready(() => {
    question = randomQuest()
    $("#a").on("click", () => {
        addAnswer('a')
    })
    $("#b").on("click", () => {
        addAnswer('b')
    })
    $("#c").on("click", () => {
        addAnswer('c')
    })
    $("#d").on("click", () => {
        addAnswer('d')
    })

    // $("#post").click(function () {
    //     $.post("http://localhost:8080/newscore",
    //         {
    //             name: 'ppipee',
    //             fail: 7,
    //         },
    //     ).then(res => {
    //         window.location.href = "/score"
    //     })
    // })
})

const addAnswer = (char) => {
    if (pointer < 4) {
        if (char === question[pointer]) {
            $(answer[pointer]).text(char)
            pointer++
        }
        else
            fail++
    }
    if (pointer === 4)
        endGame()
}
const randomQuest = () => {
    const alphabets = ['a', 'b', 'c', 'd']
    const random = () => Math.floor((Math.random() * 4))
    const question = [...Array(4).keys()].map(() => {
        let number = random()
        return alphabets[number]
    })
    return question
}
const endGame = () => {
    $.post("http://localhost:8080/newscore",
        {
            name: $('#name').text(),
            fail: fail,
        },
    ).then(res => {
        window.location.href = "/score"
    })
}
