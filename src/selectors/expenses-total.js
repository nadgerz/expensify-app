export default ( expenses = [] ) => {
  
  // const reducer = ( accumulator, currentValue ) => accumulator + currentValue;
  
  return expenses.reduce( ( accumulator, expense ) => {
    const amount = expense.amount;
    
    return accumulator + amount;
  }, 0 );
}

