
const utilityObject = (utilityState, UtilityType) => {
    return{
        ...utilityState,
        ...UtilityType
    }
}

export default utilityObject