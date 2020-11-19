const topThreeWords = (textSample) => {
    if (!textSample || textSample === []) return []
    let textArray = textSample.toLowerCase().split(' ')
    if (textArray.length === 1) return textArray
    else {
        let countedWords = textArray.reduce(function (allWords, word) {
            if (word in allWords) {
                allWords[word]++
            }
            else {
                allWords[word] = 1
            }
            return allWords
        }, {})

        let sortable = []
        for (let word in countedWords) sortable.push([word, countedWords[word]])

        sortable.sort((a, b) => b[1] - a[1])

        return sortable.slice(0, 3).map(element => element[0])
    }
}

export default topThreeWords;
