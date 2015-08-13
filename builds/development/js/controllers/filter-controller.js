angular
  .module('myApp')
  .controller('filterController',filterController);

function filterController(){
  var vm = this;
  vm.defaultValue='aa';
  vm.dataSource = [
    'aab','aac','aad','aa','aaf','aaw','aar','aarr','aacc','aaddd'
  ];
  vm.isExact = isExact;

  function isExact(value){
    return value==='aac';
  }


}
