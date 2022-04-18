const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b)
}

const parseArgumenrts = (args): Array<number> => {
    if(args.length !== 4) throw new Error("Wrong number of arguments")

    const firstNumber = Number(args[2])
    const secondNumber = Number(args[3])

    if (isNaN(firstNumber)) throw new Error("First number is not a number")
    if (isNaN(secondNumber)) throw new Error("Second number is not a number")

    return [
        firstNumber,
        secondNumber
    ]
}

const cleanArguments = parseArgumenrts(process.argv)

const a: number = cleanArguments[0]
const b: number = cleanArguments[1]

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `)
