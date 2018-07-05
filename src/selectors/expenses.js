// Get visible expenses
export default ( expenses, { text, sortBy, startDate, endDate } ) => {
  return expenses.filter( ( expense ) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    
    const textMatch = expense.description.toLocaleLowerCase().includes( text.toLocaleLowerCase() );
    console.log( text.toLocaleLowerCase() );
    console.log( textMatch );
    
    return startDateMatch && endDateMatch && textMatch;
  } );
};
