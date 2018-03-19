export default function (state = {
  selectedExchangeRecord: {},
}, action) {
  switch (action.type) {
      case 'selectExchangeRecord':
          return {
              ...state,
              selectedExchangeRecord: action.record,
          }
      default:
          return state
  }
}
