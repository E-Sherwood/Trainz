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
//testTrain, added to database from first test
var testTrain1 = {
    name: "THOMAS",
    destination: "Dankville",
    arriveTime: "4:20pm",
    freq: "30 minutes"
};
//trainData.push(testTrain1);
$('input').on("click", function () {
    $(this).val('');
})
$('#submit').on("click", function (ev) {
    ev.preventDefault();
    var newTrain = {
        name: $("#name").val(),
        destination: $("#dest").val(),
        arriveTime: $("#arrive").val(),
        freq: $("#depart").val()
    };
    trainData.push(newTrain);
    //pullFromDatabase();
});
//look into childSnapshot
// var updateFunc = function () {
//     var newRow = $('<tr>');
//     var Name = $('<td></td>');
//     var Dest = $('<td></td>');
//     var ArriveTime = $('<td></td>');
//     var endRow = $('</tr>');
//     var Freq = $('<td></td>');
//     Name.text($("#name").val()).attr("class", "new");
//     Dest.text($("#dest").val()).attr("class", "new");
//     ArriveTime.text($("#arrive").val()).attr("class", "new");
//     Freq.text($("#depart").val()).attr("class", "new");
//     $("#trainTable").append(newRow, Name, Dest, ArriveTime, Freq, endRow);

// moment.js function here -- set arrivalTime to minutes:seconds format
// arrivalTime counts down with current clock display
// when time matches clock, display status to "arrived" for freq minutes
// after freq minutes set staus to "departed/in transit"
// reset arrivalTime to default/original set time

// };
//trainData.on("childAdded", snapshot){
    //     var newRow = $('<tr>');
    //     var Name = $('<td></td>');
    //     var Dest = $('<td></td>');
    //     var ArriveTime = $('<td></td>');
    //     var endRow = $('</tr>');
    //     var Freq = $('<td></td>');
    //     Name.text(trainData.name.snapshot.val());
    //     Dest.text(trainData.destination.snapshot.val());
    //     ArriveTime.text(trainData.arriveTime.snapshot.val());
    //     Freq.text(trainData.freq.snapshot.val());
    //     $("#trainTable").append(newRow, Name, Dest, ArriveTime, Freq, endRow);
    // }

moment().format('LT');
function update() {
    $('#clock').html(moment().format('LT'));
}
setInterval(update, 1000);

trainData.on("value", function(snapshot) {
    console.log(snapshot.val());

    
    //   console.log(snapshot.val().destination);
    //   console.log(snapshot.val().arrivalTime);
    //   console.log(snapshot.val().freq);
    //   $("#").text(snapshot.val().name);
    //   $("#").text(snapshot.val().destination);
    //   $("#").text(snapshot.val().arrivalTime);
    //   $("#").text(snapshot.val().freq);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });