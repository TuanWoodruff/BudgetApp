// New Budget App





var budgetController = (function() {
    
    //Math for the budget
    
})();


var UIController = (function() {
    
    //Control the UI
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };
    
    return {
        getInPut: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will either either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
    
})();


var controller = (function(budgetCtrl, UICtrl) {
    
    //Global app controller
    
    var DOM = UICtrl.getDOMstrings();
    
    var ctrlAddItem = function() {
        
        // 1. Get input data
        var input = UICtrl.getInPut();
        console.log(input);
        
        
        // 2. Add item to budget controller
        
        // 3. Add item to the UI 
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        
        
    };
    
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
       
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });
    
})(budgetController, UIController);













































