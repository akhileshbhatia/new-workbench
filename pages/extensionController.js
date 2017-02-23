app.controller("workbenchEnhancerController",function($scope,$filter,dataService){
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  $scope.accordionArray = [];

  $scope.addDataToStorage = function(event){
    event.preventDefault();
    var date = new Date(); // Use for todays date
    //var date = new Date(2017,01,21); //new Date(yyyy,mm,dd). Use for specific dates. Months ordered from 0 in javascript
    var todaysDate = $filter("date")(date,"dd MMM yyyy");
    var currentTime = Math.round(date/1000);
    var dataToSave = [currentTime,$scope.textAreaVal.trim()];
    chrome.storage.local.get(todaysDate,function(data){
      if(angular.equals({},data)){ // //empty object means a new entry for that key will be made
        data[todaysDate] = [dataToSave];
      }
      else{
        data[todaysDate].unshift(dataToSave);
      }
      chrome.storage.local.set(data,function(){
        getData(); //call to getData function again to refresh view
      })
    });
  }

  var getData = function(){
    var askForPromise = dataService.GetData();
    askForPromise.then(
      function(data){
        $scope.storageData = data;
        $scope.sortedDates = Object.keys($scope.storageData).sort(function(a,b){
          return (new Date(b) - new Date(a));
        });
      },
      function(){
        console.log("Some error in receiving data");
      }
    )
  }
  getData(); //call on page load

  $scope.setQueryText = function(text){
    $scope.textAreaVal = text.trim();
  }

  $scope.deleteQuery = function(deleteFromDate,arrayToDelete){
    var scopeQueriesArray = $scope.storageData[deleteFromDate];
    var index = scopeQueriesArray.indexOf(arrayToDelete);
    if(index != -1){
      chrome.storage.local.get(deleteFromDate,function(data){
        var storageQueriesArray = data[deleteFromDate];
        storageQueriesArray.splice(index,1);
        if(storageQueriesArray.length == 0){ //remove that key from storage if no data present for that date
          chrome.storage.local.remove(deleteFromDate,function(){
            getData();
          })
        }
        else //when even a single query is present simply set the new data
        {
          chrome.storage.local.set(data,function(){
            getData(); //update data on view
          })
        }
      })
    }
    else{
      console.log("No such data found in storage");
    }
  }
});

app.service("dataService",function($q){
  return{
    GetData: function(){
      var defferdObj = $q.defer();
      chrome.storage.local.get(null,function(data){
        defferdObj.resolve(data);
      })
      return defferdObj.promise;
    }
  }
})
