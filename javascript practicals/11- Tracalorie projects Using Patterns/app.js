//Storage controller

//Item Controller
 const ItemCtrl = (function(){

//Item constructor
  const Item = function(id, name, calories){
      this.id = id;
      this.name = name;
      this.calories = calories;
  }
//data structures / state
const data = {
    items : [{id: 0 , name:"stack", calories:"12345"}],
    currentItem: null,
    totalCalories: 0
}

//public method
return {
    
    getItems: function(){
        return data.items
    },


    logData : function(){
        return data;
    }
}


 })() //immidiately invoked function

 
 //UI controller
 const UICtrl = (function(){

    const UISelectors = {
        itemList : "#item-list"
    }


   //public method
   return {
    populateItemList: function(items) {
      let html = '';

      items.forEach(function(item){
          html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories}</em>
          <a href="#" class="secondary-content">
            <i class="fa fa-pencil"></i>
          </a>
        </li>`
      })

      //insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html
    }
   }


  })()

//App Controller
const App = (function(ItemCtrl, UICtrl ){
 
//public method
return {
    init : function(){
        console.log('initialized app..')
        //Fetch items from data structure/state
        const items = ItemCtrl.getItems()
        
        //populate list items in UICtrl
        UICtrl.populateItemList(items)
    
    }
}


})(ItemCtrl, UICtrl)

//initialize App
App.init()