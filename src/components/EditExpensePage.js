import React from 'react';


const EditExpensePage = ( props ) => {
  console.log( props );
  
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
      
      <p>Edit Expense</p>
      
      <ExpenseForm
        onSubmit={() => {
          console.log( 'EDIT!' );
        }}
      />
    
    </div>
  );
};

export default EditExpensePage;