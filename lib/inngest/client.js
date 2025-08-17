import {Inngest} from 'inngest'

export const inngest = new Inngest({
    id:"moneyiq",
    name:"moneyiq",
    retryFunction: async(attempt) => ({
        delay: Math.pow(2, attempt)*1000,
        maxAttempts:2
    })
})