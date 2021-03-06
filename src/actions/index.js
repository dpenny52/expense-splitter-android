export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    description: expense.description,
    cost: expense.cost,
    date: expense.date,
    email: expense.email
  }
}

export const login = (loginInfo) => {
  return {
    type: 'LOGIN',
    email: loginInfo.email,
    loggedIn: true
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT',
    email: '',
    loggedIn: false
  }
}

export const descriptionChange = (description) => {
  return {
    type: 'DESCRIPTION_CHANGE',
    description: description
  }
}

export const costChange = (cost) => {
  return {
    type: 'COST_CHANGE',
    cost: cost
  }
}

export const splitWithChange = (splitWith) => {
  return {
    type: 'SPLIT_WITH_CHANGE',
    splitWith: splitWith
  }
}

export const splitPercentChange = (splitPercent) => {
  return {
    type: 'SPLIT_PERCENT_CHANGE',
    splitPercent: splitPercent
  }
}