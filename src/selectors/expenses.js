//
//    Get visible expenses
//
import moment from 'moment';


export default ( expenses, { text, sortBy, startDate, endDate } ) => {
  
  return expenses.filter( ( expense ) => {
    const createdAtMoment = moment( expense.createdAt );
  
/*
    console.log( expense );
    console.log( createdAtMoment );
    console.log( startDate );
*/
    
    const startDateMatch = startDate ? startDate.isSameOrBefore( createdAtMoment, 'day' ) : true;
    // const startDateMatch = true;
    // console.log( `startDateMatch: ${startDateMatch}` );
    const endDateMatch = endDate ? endDate.isSameOrAfter( createdAtMoment, 'day' ) : true;
    // console.log( `endDateMatch: ${endDateMatch}` );
    const textMatch = expense.description.toLocaleLowerCase().includes( text.toLocaleLowerCase() );
    // console.log( `textMatch: ${textMatch}` );
    
    return startDateMatch && endDateMatch && textMatch;
  } ).sort( ( a, b ) => {
    if ( sortBy === 'date' ) {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if ( sortBy === 'amount' ) {
      return a.amount < b.amount ? 1 : -1;
    }
  } );
};
