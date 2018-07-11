/*
export default ( expenses ) => {
  
  return expenses.reduce( ( accumulator, expense ) => {
    const amount = expense.amount;
    
    return accumulator + amount;
  }, 0 );
}
*/

/*
export default ( expenses = [] ) => {
  
  const reducer = ( accumulator, expense ) => accumulator + expense.amount;
  
  return expenses.reduce( reducer, 0 );
}
*/

export default ( expenses = [] ) => {
  
  return expenses
    .map( ( expense ) => expense.amount )
    .reduce( ( sum, amount ) => sum + amount, 0 );
}

/*
export default ( expenses ) => {
  
  if ( expenses.length === 0 ) {
    return 0;
  }
  else {
    const reducer = ( accumulator, expense ) => accumulator + expense.amount;
    
    return expenses.reduce( reducer, 0 );
  }
}
*/

