export const EATING_INPUT_TIME = 'EATING_INPUT_TIME'

export const eatingInputTimeAction = (inputTime) => {
    return {
        type: EATING_INPUT_TIME,
        payload: inputTime
    }
}