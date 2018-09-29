// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCfs_RlvJ1cpQPAmduWion9mnpPI6of9_U",
    authDomain: "trainz-79648.firebaseapp.com",
    databaseURL: "https://trainz-79648.firebaseio.com",
    projectId: "trainz-79648",
    storageBucket: "",
    messagingSenderId: "1059915177651"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var trainData = database.ref('trainz');
var testTrain1 = {
    name: "THOMAS",
    destination: "Dankville",
    arriveTime: "4:20pm",
    freq: "30 minutes"
};
//trainData.push(testTrain1);
$('input').on("click", function(){
    $(this).val('');
})
$('#submit').on("click", function(e){
    e.preventDefault();
    var newTrain = {
        name: $("#name").val(),
        destination: $("#dest").val(),
        arriveTime: $("#arrive").val(),
        freq: $("#depart").val()
    };
    trainData.push(newTrain);
    updateFunc();
});
//trainData.on('value', updateFunc);
var updateFunc = function(){
    var newRow = $('<tr>')
    var test = $('<td></td>');
     var Dest = $('<td></td>');
     var ArriveTime = $('<td></td>');
     var endRow = $('</tr>')
     var Freq= $('<td></td>');
    test.text("test");
    Dest.text("secondTest");
    ArriveTime.text("anotherTest");
    Freq.text("thirdTest")
    $("#trainTable").append(newRow, test, Dest, ArriveTime, Freq, endRow);
    
}
