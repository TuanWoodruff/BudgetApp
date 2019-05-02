// New Budget App





var budgetController = (function() {
    
    //Math for the budget
    
})();


var UIController = (function() {
    
    //Control the UI
    
    
})();


var controller = (function(budgetCtrl, UICtrl) {
    
    //Global app controller
    
    var ctrlAddItem = function() {
        
        // 1. Get input data
        
        // 2. Add item to budget controller
        
        // 3. Add item to the UI 
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        
        console.log('pressed');
        
    };
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
       
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });
    
})(budgetController, UIController);













































