if (window.location.href == "https://vidurangalakshan.github.io/WDOS_Assignment/JS_Assignment/booking.html") {

    let data1 = 0;
    let data2 = 0;
    let data3 = 0;
    let data4 = 0;
    let data5 = 0;
    let Total = 0;

    let normalHours = 0;

    //creation of increment function

    let functionCounter = 0;

    function increment(Number) {

        if (functionCounter == 0) {
            // removing the display
            document.getElementById("foreignAdult").style.display = "none";

            functionCounter += 1
        }


        let ForeignAdultPeak = 13;
        let ForeignAdultNormal = 10;
        let ForeignChildPeak = 8;
        let ForeignChildNormal = 5;
        let slAdultPeak = 6;
        let slAdultNormal = 4;
        let slChildPeak = 3;
        let slChildNormal = 2;
        let ForeignAdult;
        let ForeignChild;
        let slAdult;
        let slChild;
        let Infant;

        let normalHours = 0;
        let hours = document.getElementById("hoursValueStore").innerText;
        let peakCount = document.getElementById("peakValueStore").innerText;
        normalHours = hours - peakCount;

        switch (Number) {
            case 1:
                data1 = data1 + 1;
                document.getElementById("counter1").innerHTML = "&nbsp;&nbsp;&nbsp;" + data1 + "&nbsp;&nbsp;&nbsp;";

                // displaying the related one
                document.getElementById("SLAdult").style.display = "";

                // calculation

                // total = no.of tickets * ((one normal ticket price * no.of normal hours) + (one peak ticket price * no.of peak hours))
                slAdult = data1 * ((slAdultNormal * normalHours) + (slAdultPeak * peakCount));
                document.getElementById("sla").innerHTML = `${data1} SL Adults`;
                document.getElementById("sla_Charge").innerHTML = `$${slAdult}`;


                break;
            case 2:
                data2 = data2 + 1;
                document.getElementById("counter2").innerHTML = "&nbsp;&nbsp;&nbsp;" + data2 + "&nbsp;&nbsp;&nbsp;";

                // displaying the related one
                document.getElementById("SLChild").style.display = "";


                slChild = data2 * ((slChildPeak * peakCount) + (slChildNormal * normalHours));
                document.getElementById("slc").innerHTML = `${data2} SL Children`;
                document.getElementById("slc_Charge").innerHTML = `$${slChild}`;

                break;
            case 3:
                data3 = data3 + 1;

                document.getElementById("counter3").innerHTML = "&nbsp;&nbsp;&nbsp;" + data3 + "&nbsp;&nbsp;&nbsp;";

                // displaying the related one
                document.getElementById("foreignAdult").style.display = "";


                ForeignAdult = data3 * ((ForeignAdultPeak * peakCount) + (ForeignAdultNormal * normalHours));
                document.getElementById("fa").innerHTML = `${data3} Foreign Adults`;
                document.getElementById("fa_Charge").innerHTML = `$${ForeignAdult}`;

                break;
            case 4:
                data4 = data4 + 1;
                document.getElementById("counter4").innerHTML = "&nbsp;&nbsp;&nbsp;" + data4 + "&nbsp;&nbsp;&nbsp;";

                // displaying the related one
                document.getElementById("foreignChild").style.display = "";


                ForeignChild = data4 * ((ForeignChildPeak * peakCount) + (ForeignChildNormal * normalHours));
                document.getElementById("fc").innerHTML = `${data4} Foreign Children`;
                document.getElementById("fc_Charge").innerHTML = `$${ForeignChild}`;

                break;
            case 5:
                data5 = data5 + 1;
                document.getElementById("counter5").innerHTML = "&nbsp;&nbsp;&nbsp;" + data5 + "&nbsp;&nbsp;&nbsp;";

                // displaying the related one
                document.getElementById("Infant").style.display = "";

                Infant = `Free`;
                document.getElementById("infant").innerHTML = `${data5} Infants`;
                document.getElementById("infant_Charge").innerHTML = Infant;

                break;
        }




        // this below code updates the final payment amount in the table

        // displaying the sub-total in the summary table

        let total1 = parseInt(document.getElementById("sla_Charge").innerText.slice(1,));
        let total2 = parseInt(document.getElementById("slc_Charge").innerText.slice(1,));
        let total3 = parseInt(document.getElementById("fa_Charge").innerText.slice(1,));
        let total4 = parseInt(document.getElementById("fc_Charge").innerText.slice(1,));


        if (data1 == 0 && data2 == 0 && data3 == 0) {
            document.getElementById("total").innerText = "$" + total4;
        } else if (data1 == 0 && data2 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + total3;
        } else if (data1 == 0 && data3 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + total2;
        } else if (data2 == 0 && data3 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + total1;
        } else if (data1 == 0 && data2 == 0) {
            document.getElementById("total").innerText = "$" + (total3 + total4);
        } else if (data1 == 0 && data3 == 0) {
            document.getElementById("total").innerText = "$" + (total2 + total4);
        } else if (data1 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + (total2 + total3);
        } else if (data2 == 0 && data3 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total4);
        } else if (data2 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total3);
        } else if (data3 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total2);
        } else if (data1 == 0) {
            document.getElementById("total").innerText = "$" + (total2 + total3 + total4);
        } else if (data2 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total3 + total4);
        } else if (data3 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total2 + total4);
        } else if (data4 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total2 + total3);
        } else {
            document.getElementById("total").innerText = "$" + (total1 + total2 + total3 + total4);
        }


    }



    //creation of decrement function
    function decrement(Number) {



        let ForeignAdultPeak = 13;
        let ForeignAdultNormal = 10;
        let ForeignChildPeak = 8;
        let ForeignChildNormal = 5;
        let slAdultPeak = 6;
        let slAdultNormal = 4;
        let slChildPeak = 3;
        let slChildNormal = 2;
        let ForeignAdult;
        let ForeignChild;
        let slAdult;
        let slChild;
        let Infant;

        let normalHours = 0;
        let hours = document.getElementById("hoursValueStore").innerText;
        let peakCount = document.getElementById("peakValueStore").innerText;
        normalHours = hours - peakCount;

        switch (Number) {
            case 1:
                data1 = data1 - 1;
                if (data1 <= 0) {
                    data1 = 0;
                    document.getElementById("SLAdult").style.display = "none";
                    document.getElementById("counter1").innerHTML = "&nbsp;&nbsp;&nbsp;" + data1 + "&nbsp;&nbsp;&nbsp;";
                    break;

                }
                document.getElementById("counter1").innerHTML = "&nbsp;&nbsp;&nbsp;" + data1 + "&nbsp;&nbsp;&nbsp;";

                // calculation

                // total = no.of tickets * ((one normal ticket price * no.of normal hours) + (one peak ticket price * no.of peak hours))
                slAdult = data1 * ((slAdultNormal * normalHours) + (slAdultPeak * peakCount));
                document.getElementById("sla").innerHTML = `${data1} SL Adults`;
                document.getElementById("sla_Charge").innerHTML = `$${slAdult}`;

                break;
            case 2:
                data2 = data2 - 1;
                if (data2 <= 0) {
                    data2 = 0;
                    document.getElementById("SLChild").style.display = "none";
                    document.getElementById("counter2").innerHTML = "&nbsp;&nbsp;&nbsp;" + data2 + "&nbsp;&nbsp;&nbsp;";
                    break;
                }
                document.getElementById("counter2").innerHTML = "&nbsp;&nbsp;&nbsp;" + data2 + "&nbsp;&nbsp;&nbsp;";


                slChild = data2 * ((slChildPeak * peakCount) + (slChildNormal * normalHours));
                document.getElementById("slc").innerHTML = `${data2} SL Children`;
                document.getElementById("slc_Charge").innerHTML = `$${slChild}`;


                break;
            case 3:
                data3 = data3 - 1;
                if (data3 <= 0) {
                    data3 = 0;
                    document.getElementById("foreignAdult").style.display = "none";
                    document.getElementById("counter3").innerHTML = "&nbsp;&nbsp;&nbsp;" + data3 + "&nbsp;&nbsp;&nbsp;";
                    break;
                }
                document.getElementById("counter3").innerHTML = "&nbsp;&nbsp;&nbsp;" + data3 + "&nbsp;&nbsp;&nbsp;";

                ForeignAdult = data3 * ((ForeignAdultPeak * peakCount) + (ForeignAdultNormal * normalHours));
                document.getElementById("fa").innerHTML = `${data3} Foreign Adults`;
                document.getElementById("fa_Charge").innerHTML = `$${ForeignAdult}`;

                break;
            case 4:
                data4 = data4 - 1;
                if (data4 <= 0) {
                    data4 = 0;
                    document.getElementById("foreignChild").style.display = "none";
                    document.getElementById("counter4").innerHTML = "&nbsp;&nbsp;&nbsp;" + data4 + "&nbsp;&nbsp;&nbsp;";
                    break;
                }
                document.getElementById("counter4").innerHTML = "&nbsp;&nbsp;&nbsp;" + data4 + "&nbsp;&nbsp;&nbsp;";

                ForeignChild = data4 * ((ForeignChildPeak * peakCount) + (ForeignChildNormal * normalHours));
                document.getElementById("fc").innerHTML = `${data4} Foreign Children`;
                document.getElementById("fc_Charge").innerHTML = `$${ForeignChild}`;


                break;
            case 5:
                data5 = data5 - 1;
                if (data5 <= 0) {
                    data5 = 0;
                    document.getElementById("Infant").style.display = "none";
                    document.getElementById("counter5").innerHTML = "&nbsp;&nbsp;&nbsp;" + data5 + "&nbsp;&nbsp;&nbsp;";
                    break;
                }
                document.getElementById("counter5").innerHTML = "&nbsp;&nbsp;&nbsp;" + data5 + "&nbsp;&nbsp;&nbsp;";

                Infant = `Free`;
                document.getElementById("infant").innerHTML = `${data5} Infants`;
                document.getElementById("infant_Charge").innerHTML = Infant;


                break;
        }



        // this below code updates the final payment amount in the table

        // displaying the sub-total in the summary table

        let total1 = parseInt(document.getElementById("sla_Charge").innerText.slice(1,));
        let total2 = parseInt(document.getElementById("slc_Charge").innerText.slice(1,));
        let total3 = parseInt(document.getElementById("fa_Charge").innerText.slice(1,));
        let total4 = parseInt(document.getElementById("fc_Charge").innerText.slice(1,));
        console.log(data1, data2, data3, data4);

        if (data1 == 0 && data2 == 0 && data3 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$0";
        } else if (data1 == 0 && data2 == 0 && data3 == 0) {
            document.getElementById("total").innerText = "$" + total4;
        } else if (data1 == 0 && data2 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + total3;
        } else if (data1 == 0 && data3 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + total2;
        } else if (data2 == 0 && data3 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + total1;
        } else if (data1 == 0 && data2 == 0) {
            document.getElementById("total").innerText = "$" + (total3 + total4);
        } else if (data1 == 0 && data3 == 0) {
            document.getElementById("total").innerText = "$" + (total2 + total4);
        } else if (data1 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + (total2 + total3);
        } else if (data2 == 0 && data3 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total4);
        } else if (data2 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total3);
        } else if (data3 == 0 && data4 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total2);
        } else if (data1 == 0) {
            document.getElementById("total").innerText = "$" + (total2 + total3 + total4);
        } else if (data2 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total3 + total4);
        } else if (data3 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total2 + total4);
        } else if (data4 == 0) {
            document.getElementById("total").innerText = "$" + (total1 + total2 + total3);
        } else {
            document.getElementById("total").innerText = "$" + (total1 + total2 + total3 + total4);
        }

    }


    function btn() {



        sessionStorage.setItem("local-date", document.getElementById("day").innerText);
        sessionStorage.setItem("local-time", document.getElementById("timeLimits").innerText);
        sessionStorage.setItem("local-duration", document.getElementById("duration").innerText);

        sessionStorage.setItem("local-data1", data1);
        sessionStorage.setItem("local-data2", data2);
        sessionStorage.setItem("local-data3", data3);
        sessionStorage.setItem("local-data4", data4);
        sessionStorage.setItem("local-data5", data5);

        sessionStorage.setItem("local-fa", document.getElementById("fa").innerText);
        sessionStorage.setItem("local-fa_Charge", document.getElementById("fa_Charge").innerText);

        sessionStorage.setItem("local-fc", document.getElementById("fc").innerText);
        sessionStorage.setItem("local-fc_Charge", document.getElementById("fc_Charge").innerText);

        sessionStorage.setItem("local-slc", document.getElementById("slc").innerText);
        sessionStorage.setItem("local-slc_Charge", document.getElementById("slc_Charge").innerText);

        sessionStorage.setItem("local-sla", document.getElementById("sla").innerText);
        sessionStorage.setItem("local-sla_Charge", document.getElementById("sla_Charge").innerText);

        sessionStorage.setItem("local-infant", document.getElementById("infant").innerText);
        sessionStorage.setItem("local-infant_Charge", document.getElementById("infant_Charge").innerText);

        sessionStorage.setItem("local-total", document.getElementById("total").innerText);

        window.location.href = "https://vidurangalakshan.github.io/WDOS_Assignment/JS_Assignment/details.html";


    }




}







































































































const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}" id="num${i}"  onclick="getSelectedDay(${i})">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}





if (window.location.href == "http://127.0.0.1:5500/booking.html") {

    renderCalendar();

}






prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});


///////////////////////////////////////////////////////////////////////

let dateSetup = new Date();
let day = dateSetup.getDate();

let prev = "num" + day;

function getSelectedDay(i) {
    /* 
        console.log(i);
        console.log(currMonth + 1);
        console.log(currYear);
        console.log("-----------") */

    let selectedDay = document.getElementById(`num${i}`);
    selectedDay.classList.add("active");


    let selectedDefaultDay = document.getElementById(prev);
    selectedDefaultDay.classList.remove("active");

    prev = "num" + i;

    dateSetup = i + '/' + (currMonth + 1) + '/' + currYear;
    /*  console.log(dateSetup); */
    document.getElementById('day').innerText = dateSetup;

}






/* console.log(currMonth + 1);
console.log(currYear); */
/*
let Month = "";

switch (currMonth + 1) {
    case 1:
        Month = "January";
        break;
    case 2:
        Month = "February";
        break;
    case 3:
        Month = "March";
        break;
    case 4:
        Month = "April";
        break;
    case 5:
        Month = "May";
        break;
    case 6:
        Month = "June";
        break;
    case 7:
        Month = "July";
        break;
    case 8:
        Month = "August";
        break;
    case 9:
        Month = "September";
        break;
    case 10:
        Month = "October";
        break;
    case 11:
        Month = "November";
        break;
    case 12:
        Month = "December";
        break;

}
*/

//////////////////////////////////////////////////////////////////////




let peakEnable1 = false;
let peakEnable2 = false;
let peakEnable3 = false;
let peakEnable4 = false;
let peakEnable5 = false;
let peakEnable6 = false;


function pick() {


    // box 1

    // Get the checkbox
    var checkBox = document.getElementById("click1");
    // Get the output text
    var box = document.getElementById("time1");

    // If the checkbox is checked, display the output text

    if (checkBox.checked == true) {
        box.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
    } else {
        box.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        
    }




    // box 2

    var checkBox2 = document.getElementById("click2");
    var box2 = document.getElementById("time2");

    if (checkBox2.checked == true) {
        box2.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
    } else {
        box2.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }


    // box 3

    var checkBox3 = document.getElementById("click3");
    var box3 = document.getElementById("time3");

    if (checkBox3.checked == true) {
        box3.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
    } else {
        box3.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }



    // box 4


    var checkBox4 = document.getElementById("click4");
    var box4 = document.getElementById("time4");

    if (checkBox4.checked == true) {
        box4.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        peakEnable1 = true;
    } else {
        box4.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        peakEnable1 = false;
    }



    // box 5

    var checkBox5 = document.getElementById("click5");
    var box5 = document.getElementById("time5");

    if (checkBox5.checked == true) {
        box5.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        peakEnable2 = true;
    } else {
        box5.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        peakEnable2 = false;
    }



    // box 6

    var checkBox6 = document.getElementById("click6");
    var box6 = document.getElementById("time6");

    if (checkBox6.checked == true) {
        box6.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        peakEnable3 = true;
    } else {
        box6.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        peakEnable3 = false;
    }

    // box 7

    var checkBox7 = document.getElementById("click7");
    var box7 = document.getElementById("time7");

    if (checkBox7.checked == true) {
        box7.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
    } else {
        box7.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }


    // box 8

    var checkBox8 = document.getElementById("click8");
    var box8 = document.getElementById("time8");

    if (checkBox8.checked == true) {
        box8.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
    } else {
        box8.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }



    // box 9

    var checkBox9 = document.getElementById("click9");
    var box9 = document.getElementById("time9");

    if (checkBox9.checked == true) {
        box9.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        peakEnable4 = true;
    } else {
        box9.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        peakEnable4 = false;
    }



    // box 10

    var checkBox10 = document.getElementById("click10");
    var box10 = document.getElementById("time10");

    if (checkBox10.checked == true) {
        box10.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        peakEnable5 = true;
    } else {
        box10.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        peakEnable5 = false;
    }



    // box11

    var checkBox11 = document.getElementById("click11");
    var box11 = document.getElementById("time11");

    if (checkBox11.checked == true) {
        box11.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        peakEnable6 = true;
    } else {
        box11.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        peakEnable6 = false;
    }












/*
    let (peakEnable1 == true) = (peakEnable1.checked == true);
    let (peakEnable2 == true) = (peakEnable2.checked == true);
    let (peakEnable3 == true) = (peakEnable3.checked == true);
    let (peakEnable4 == true) = (peakEnable4.checked == true);
    let (peakEnable5 == true) = (peakEnable5.checked == true);
    let (peakEnable6 == true) = (peakEnable6.checked == true);
*/

    let peakCount = 0;

/*

    if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true) && (peakEnable6 == true)) { // 1,2,3,4,5,6
        peakCount = 5;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true)) { // 1,2,3,4,6
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable5 == true)) {  // 1,2,3,5,6
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable4 == true) && (peakEnable5 == true)) {  // 1,2,4,5,6
        peakCount = 4;
    } else if (((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true))) { // 1,3,4,5,6
        peakCount = 4;
    } else if (((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true))) { // 2,3,4,5,6
        peakCount = 4;
    } else if (((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true))) { // 1,2,3
        peakCount = 3;
    } else if (((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable4 == true))) { // 1,2,4
        peakCount = 3;
    } else if (((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable5 == true))) { // 1,2,5
        peakCount = 3;
    } else if (((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable4 == true))) { // 1,3,4
        peakCount = 3;
    } else if (((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable5 == true))) { // 1,3,5
        peakCount = 3;
    } else if (((peakEnable1 == true) && (peakEnable4 == true) && (peakEnable5 == true))) { // 1,4,5
        peakCount = 3;
    } else if (((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true))) { // 2,3,4
        peakCount = 3;
    } else if (((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable5 == true))) { // 2,3,5
        peakCount = 3;
    } else if (((peakEnable2 == true) && (peakEnable4 == true) && (peakEnable5 == true))) { // 2,4,5
        peakCount = 3;
    } else if (((peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true))) { // 2,4,5
        peakCount = 3;
    } else if (((peakEnable1 == true) && (peakEnable2 == true))) { // 1,2
        peakCount = 2;
    } else if (((peakEnable1 == true) && (peakEnable3 == true))) { // 1,3
        peakCount = 2;
    } else if (((peakEnable1 == true) && (peakEnable4 == true))) { // 1,4
        peakCount = 2;
    } else if (((peakEnable1 == true) && (peakEnable5 == true))) { // 1,5
        peakCount = 2;
    } else if (((peakEnable2 == true) && (peakEnable3 == true))) { // 2,3
        peakCount = 2;
    } else if (((peakEnable2 == true) && (peakEnable4 == true))) { // 2,4
        peakCount = 2;
    } else if (((peakEnable2 == true) && (peakEnable5 == true))) { // 2,5
        peakCount = 2;
    } else if (((peakEnable3 == true) && (peakEnable4 == true))) { // 3,4
        peakCount = 2;
    } else if (((peakEnable3 == true) && (peakEnable5 == true))) { // 3,5
        peakCount = 2;
    } else if (((peakEnable4 == true) && (peakEnable5 == true))) { // 4,5
        peakCount = 2;
    } else if ((peakEnable1 == true)) { // 1
        peakCount = 1;
    } else if ((peakEnable2 == true)) { // 2
        peakCount = 1;
    } else if ((peakEnable3 == true)) { // 3
        peakCount = 1;
    } else if ((peakEnable4 == true)) { // 4
        peakCount = 1;
    } else if ((peakEnable5 == true)) { // 5
        peakCount = 1;
    } else {            // 0
        peakCount = 0;
    }


    document.getElementById("peakValueStore").innerText = peakCount;
*/



/* 
if (peakEnable1==true && peakEnable2==true && peakEnable3==true && peakEnable4==true && peakEnable5==true && peakEnable6==true){
    peakCount = 6;
    console.log("lool");
}
 */



    if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 6;
 




    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true)){
        peakCount = 5;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable6 == true)){
        peakCount = 5;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 5;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable4 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 5;
    } else if ((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 5;
    } else if ((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 5;
    
    
    
    
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true)){
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable5 == true)){
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true) && (peakEnable6 == true)){
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable4 == true) && (peakEnable5 == true)){
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable4 == true) && (peakEnable6 == true)){
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true)){
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable6 == true)){
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 4;
    } else if ((peakEnable1 == true) && (peakEnable4 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 4;
    } else if ((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true)){
        peakCount = 4;
    } else if ((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable6 == true)){
        peakCount = 4;
    } else if ((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true)){
        peakCount = 4;
    } else if ((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 4;
    } else if ((peakEnable2 == true) && (peakEnable4 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 4;
    } else if ((peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 4;




    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable3 == true)){
        peakCount = 3;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable4 == true)){
        peakCount = 3;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable5 == true)){
        peakCount = 3;
    } else if ((peakEnable1 == true) && (peakEnable2 == true) && (peakEnable6 == true)){
        peakCount = 3;
    } else if ((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable4 == true)){
        peakCount = 3;
    } else if ((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable5 == true)){
        peakCount = 3;
    } else if ((peakEnable1 == true) && (peakEnable3 == true) && (peakEnable6 == true)){
        peakCount = 3;
    } else if ((peakEnable1 == true) && (peakEnable4 == true) && (peakEnable5 == true)){
        peakCount = 3;
    } else if ((peakEnable1 == true) && (peakEnable4 == true) && (peakEnable6 == true)){
        peakCount = 3;
    } else if ((peakEnable1 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 3;
    } else if ((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable4 == true)){
        peakCount = 3;
    } else if ((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable5 == true)){
        peakCount = 3;
    } else if ((peakEnable2 == true) && (peakEnable3 == true) && (peakEnable6 == true)){
        peakCount = 3;
    } else if ((peakEnable2 == true) && (peakEnable4 == true) && (peakEnable5 == true)){
        peakCount = 3;
    } else if ((peakEnable2 == true) && (peakEnable4 == true) && (peakEnable6 == true)){
        peakCount = 3;
    } else if ((peakEnable2 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 3;
    } else if ((peakEnable3 == true) && (peakEnable4 == true) && (peakEnable5 == true)){
        peakCount = 3;
    } else if ((peakEnable3 == true) && (peakEnable4 == true) && (peakEnable6 == true)){
        peakCount = 3;
    } else if ((peakEnable3 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 3;
    } else if ((peakEnable4 == true) && (peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 3;
    
    
    
    } else if ((peakEnable1 == true) && (peakEnable2 == true)){
        peakCount = 2;
    } else if ((peakEnable1 == true) && (peakEnable3 == true)){
        peakCount = 2;
    } else if ((peakEnable1 == true) && (peakEnable4 == true)){
        peakCount = 2;
    } else if ((peakEnable1 == true) && (peakEnable5 == true)){
        peakCount = 2;
    } else if ((peakEnable1 == true) && (peakEnable6 == true)){
        peakCount = 2;
    } else if ((peakEnable2 == true) && (peakEnable3 == true)){
        peakCount = 2;
    } else if ((peakEnable2 == true) && (peakEnable4 == true)){
        peakCount = 2;
    } else if ((peakEnable2 == true) && (peakEnable5 == true)){
        peakCount = 2;
    } else if ((peakEnable2 == true) && (peakEnable6 == true)){
        peakCount = 2;
    } else if ((peakEnable3 == true) && (peakEnable4 == true)){
        peakCount = 2;
    } else if ((peakEnable3 == true) && (peakEnable5 == true)){
        peakCount = 2;
    } else if ((peakEnable3 == true) && (peakEnable6 == true)){
        peakCount = 2;
    } else if ((peakEnable4 == true) && (peakEnable5 == true)){
        peakCount = 2;
    } else if ((peakEnable4 == true) && (peakEnable6 == true)){
        peakCount = 2;
    } else if ((peakEnable5 == true) && (peakEnable6 == true)){
        peakCount = 2;
    
    
    
    } else if ((peakEnable1 == true)){
        peakCount = 1;
    } else if ((peakEnable2 == true)){
        peakCount = 1;
    } else if ((peakEnable3 == true)){
        peakCount = 1;
    } else if ((peakEnable4 == true)){
        peakCount = 1;
    } else if ((peakEnable5 == true)){
        peakCount = 1;
    } else if ((peakEnable6 == true)){
        peakCount = 1;
    
    
    
    }/*  else {
        peakCount = 0;
    } */



    document.getElementById("peakValueStore").innerText = peakCount;
    console.log(peakCount);








}




function time() {

    let box1 = document.getElementById("click1");
    let box2 = document.getElementById("click2");
    let box3 = document.getElementById("click3");
    let box4 = document.getElementById("click4");
    let box5 = document.getElementById("click5");
    let box6 = document.getElementById("click6");
    let box7 = document.getElementById("click7");
    let box8 = document.getElementById("click8");
    let box9 = document.getElementById("click9");
    let box10 = document.getElementById("click10");
    let box11 = document.getElementById("click11");




    // number of selected hours/boxes

    let hour = 0;

    if (box1.checked == true) {
        hour += 1;
        if (box2.checked == true) {
            hour += 1;
            if (box3.checked == true) {
                hour += 1;
                if (box4.checked == true) {
                    hour += 1;
                    if (box5.checked == true) {
                        hour += 1;
                        if (box6.checked == true) {
                            hour += 1;
                            if (box7.checked == true) {
                                hour += 1;
                                if (box8.checked == true) {
                                    hour += 1;
                                    if (box9.checked == true) {
                                        hour += 1;
                                        if (box10.checked == true) {
                                            hour += 1;
                                            if (box11.checked == true) {
                                                hour += 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (box2.checked == true) {
        hour += 1;
        if (box3.checked == true) {
            hour += 1;
            if (box4.checked == true) {
                hour += 1;
                if (box5.checked == true) {
                    hour += 1;
                    if (box6.checked == true) {
                        hour += 1;
                        if (box7.checked == true) {
                            hour += 1;
                            if (box8.checked == true) {
                                hour += 1;
                                if (box9.checked == true) {
                                    hour += 1;
                                    if (box10.checked == true) {
                                        hour += 1;
                                        if (box11.checked == true) {
                                            hour += 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (box3.checked == true) {
        hour += 1;
        if (box4.checked == true) {
            hour += 1;
            if (box5.checked == true) {
                hour += 1;
                if (box6.checked == true) {
                    hour += 1;
                    if (box7.checked == true) {
                        hour += 1;
                        if (box8.checked == true) {
                            hour += 1;
                            if (box9.checked == true) {
                                hour += 1;
                                if (box10.checked == true) {
                                    hour += 1;
                                    if (box11.checked == true) {
                                        hour += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (box4.checked == true) {
        hour += 1;
        if (box5.checked == true) {
            hour += 1;
            if (box6.checked == true) {
                hour += 1;
                if (box7.checked == true) {
                    hour += 1;
                    if (box8.checked == true) {
                        hour += 1;
                        if (box9.checked == true) {
                            hour += 1;
                            if (box10.checked == true) {
                                hour += 1;
                                if (box11.checked == true) {
                                    hour += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (box5.checked == true) {
        hour += 1;
        if (box6.checked == true) {
            hour += 1;
            if (box7.checked == true) {
                hour += 1;
                if (box8.checked == true) {
                    hour += 1;
                    if (box9.checked == true) {
                        hour += 1;
                        if (box10.checked == true) {
                            hour += 1;
                            if (box11.checked == true) {
                                hour += 1;
                            }
                        }
                    }
                }
            }
        }
    } else if (box6.checked == true) {
        hour += 1;
        if (box7.checked == true) {
            hour += 1;
            if (box8.checked == true) {
                hour += 1;
                if (box9.checked == true) {
                    hour += 1;
                    if (box10.checked == true) {
                        hour += 1;
                        if (box11.checked == true) {
                            hour += 1;
                        }
                    }
                }
            }
        }
    } else if (box7.checked == true) {
        hour += 1;
        if (box8.checked == true) {
            hour += 1;
            if (box9.checked == true) {
                hour += 1;
                if (box10.checked == true) {
                    hour += 1;
                    if (box11.checked == true) {
                        hour += 1;
                    }
                }
            }
        }
    } else if (box8.checked == true) {
        hour += 1;
        if (box9.checked == true) {
            hour += 1;
            if (box10.checked == true) {
                hour += 1;
                if (box11.checked == true) {
                    hour += 1;
                }
            }
        }
    } else if (box9.checked == true) {
        hour += 1;
        if (box10.checked == true) {
            hour += 1;
            if (box11.checked == true) {
                hour += 1;
            }
        }
    } else if (box10.checked == true) {
        hour += 1;
        if (box11.checked == true) {
            hour += 1;
        }
    } else if (box11.checked == true) {
        hour += 1;
    }




    console.log(hour);


    document.getElementById("hoursValueStore").innerText = hour;











    // simplifying variables

    let b1 = box1.checked;
    let b2 = box2.checked;
    let b3 = box3.checked;
    let b4 = box4.checked;
    let b5 = box5.checked;
    let b6 = box6.checked;
    let b7 = box7.checked;
    let b8 = box8.checked;
    let b9 = box9.checked;
    let b10 = box10.checked;
    let b11 = box11.checked;


    // using simplified variables to find the start and stop times


    timeStart = 0;
    timeStop = 0;


    if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11) {
        timeStart = 7;
        timeStop = 18;
    } else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10) {
        timeStart = 7;
        timeStop = 17;
    } else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
        timeStart = 7;
        timeStop = 16;
    } else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8) {
        timeStart = 7;
        timeStop = 15;
    } else if (b1 && b2 && b3 && b4 && b5 && b6 && b7) {
        timeStart = 7;
        timeStop = 14;
    } else if (b1 && b2 && b3 && b4 && b5 && b6) {
        timeStart = 7;
        timeStop = 13;
    } else if (b1 && b2 && b3 && b4 && b5) {
        timeStart = 7;
        timeStop = 12;
    } else if (b1 && b2 && b3 && b4) {
        timeStart = 7;
        timeStop = 11;
    } else if (b1 && b2 && b3) {
        timeStart = 7;
        timeStop = 10;
    } else if (b1 && b2) {
        timeStart = 7;
        timeStop = 9;
    } else if (b1) {
        timeStart = 7;
        timeStop = 8;
    } else if (b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11) {
        timeStart = 8;
        timeStop = 18;
    } else if (b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10) {
        timeStart = 8;
        timeStop = 17;
    } else if (b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
        timeStart = 8;
        timeStop = 16;
    } else if (b2 && b3 && b4 && b5 && b6 && b7 && b8) {
        timeStart = 8;
        timeStop = 15;
    } else if (b2 && b3 && b4 && b5 && b6 && b7) {
        timeStart = 8;
        timeStop = 14;
    } else if (b2 && b3 && b4 && b5 && b6) {
        timeStart = 8;
        timeStop = 13;
    } else if (b2 && b3 && b4 && b5) {
        timeStart = 8;
        timeStop = 12;
    } else if (b2 && b3 && b4) {
        timeStart = 8;
        timeStop = 11;
    } else if (b2 && b3) {
        timeStart = 8;
        timeStop = 10;
    } else if (b2) {
        timeStart = 8;
        timeStop = 9;
    } else if (b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11) {
        timeStart = 9;
        timeStop = 18;
    } else if (b3 && b4 && b5 && b6 && b7 && b8 && b9 && b10) {
        timeStart = 9;
        timeStop = 17;
    } else if (b3 && b4 && b5 && b6 && b7 && b8 && b9) {
        timeStart = 9;
        timeStop = 16;
    } else if (b3 && b4 && b5 && b6 && b7 && b8) {
        timeStart = 9;
        timeStop = 15;
    } else if (b3 && b4 && b5 && b6 && b7) {
        timeStart = 9;
        timeStop = 14;
    } else if (b3 && b4 && b5 && b6) {
        timeStart = 9;
        timeStop = 13;
    } else if (b3 && b4 && b5) {
        timeStart = 9;
        timeStop = 12;
    } else if (b3 && b4) {
        timeStart = 9;
        timeStop = 11;
    } else if (b3) {
        timeStart = 9;
        timeStop = 10;
    } else if (b4 && b5 && b6 && b7 && b8 && b9 && b10 && b11) {
        timeStart = 10;
        timeStop = 18;
    } else if (b4 && b5 && b6 && b7 && b8 && b9 && b10) {
        timeStart = 10;
        timeStop = 17;
    } else if (b4 && b5 && b6 && b7 && b8 && b9) {
        timeStart = 10;
        timeStop = 16;
    } else if (b4 && b5 && b6 && b7 && b8) {
        timeStart = 10;
        timeStop = 15;
    } else if (b4 && b5 && b6 && b7) {
        timeStart = 10;
        timeStop = 14;
    } else if (b4 && b5 && b6) {
        timeStart = 10;
        timeStop = 13;
    } else if (b4 && b5) {
        timeStart = 10;
        timeStop = 12;
    } else if (b4) {
        timeStart = 10;
        timeStop = 11;
    } else if (b5 && b6 && b7 && b8 && b9 && b10 && b11) {
        timeStart = 11;
        timeStop = 18;
    } else if (b5 && b6 && b7 && b8 && b9 && b10) {
        timeStart = 11;
        timeStop = 17;
    } else if (b5 && b6 && b7 && b8 && b9) {
        timeStart = 11;
        timeStop = 16;
    } else if (b5 && b6 && b7 && b8) {
        timeStart = 11;
        timeStop = 15;
    } else if (b5 && b6 && b7) {
        timeStart = 11;
        timeStop = 14;
    } else if (b5 && b6) {
        timeStart = 11;
        timeStop = 13;
    } else if (b5) {
        timeStart = 11;
        timeStop = 12;
    } else if (b6 && b7 && b8 && b9 && b10 && b11) {
        timeStart = 12;
        timeStop = 18;
    } else if (b6 && b7 && b8 && b9 && b10) {
        timeStart = 12;
        timeStop = 17;
    } else if (b6 && b7 && b8 && b9) {
        timeStart = 12;
        timeStop = 16;
    } else if (b6 && b7 && b8) {
        timeStart = 12;
        timeStop = 15;
    } else if (b6 && b7) {
        timeStart = 12;
        timeStop = 14;
    } else if (b6) {
        timeStart = 12;
        timeStop = 13;
    } else if (b7 && b8 && b9 && b10 && b11) {
        timeStart = 13;
        timeStop = 18;
    } else if (b7 && b8 && b9 && b10) {
        timeStart = 13;
        timeStop = 17;
    } else if (b7 && b8 && b9) {
        timeStart = 13;
        timeStop = 16;
    } else if (b7 && b8) {
        timeStart = 13;
        timeStop = 15;
    } else if (b7) {
        timeStart = 13;
        timeStop = 14;
    } else if (b8 && b9 && b10 && b11) {
        timeStart = 14;
        timeStop = 18;
    } else if (b8 && b9 && b10) {
        timeStart = 14;
        timeStop = 17;
    } else if (b8 && b9) {
        timeStart = 14;
        timeStop = 16;
    } else if (b8) {
        timeStart = 14;
        timeStop = 15;
    } else if (b9 && b10 && b11) {
        timeStart = 15;
        timeStop = 18;
    } else if (b9 && b10) {
        timeStart = 15;
        timeStop = 17;
    } else if (b9) {
        timeStart = 15;
        timeStop = 16;
    } else if (b10 && b11) {
        timeStart = 16;
        timeStop = 18;
    } else if (b10) {
        timeStart = 16;
        timeStop = 17;
    } else if (b11) {
        timeStart = 17;
        timeStop = 18;
    }











    if (timeStart == 7) {
        timeStartString = "07.00 am";
    }
    if (timeStop == 7) {
        timeStopString = "07.00 am";
    }
    if (timeStart == 8) {
        timeStartString = "08.00 am";
    }
    if (timeStop == 8) {
        timeStopString = "08.00 am";
    }
    if (timeStart == 9) {
        timeStartString = "09.00 am";
    }
    if (timeStop == 9) {
        timeStopString = "09.00 am";
    }
    if (timeStart == 10) {
        timeStartString = "10.00 am";
    }
    if (timeStop == 10) {
        timeStopString = "10.00 am";
    }
    if (timeStart == 11) {
        timeStartString = "11.00 am";
    }
    if (timeStop == 11) {
        timeStopString = "11.00 am";
    }
    if (timeStart == 12) {
        timeStartString = "12.00 am";
    }
    if (timeStop == 12) {
        timeStopString = "12.00 am";
    }
    if (timeStart == 13) {
        timeStartString = "01.00 pm";
    }
    if (timeStop == 13) {
        timeStopString = "01.00 pm";
    }
    if (timeStart == 14) {
        timeStartString = "02.00 pm";
    }
    if (timeStop == 14) {
        timeStopString = "02.00 pm";
    }
    if (timeStart == 15) {
        timeStartString = "03.00 pm";
    }
    if (timeStop == 15) {
        timeStopString = "03.00 pm";
    }
    if (timeStart == 16) {
        timeStartString = "04.00 pm";
    }
    if (timeStop == 16) {
        timeStopString = "04.00 pm;"
    }
    if (timeStart == 17) {
        timeStartString = "05.00 pm";
    }
    if (timeStop == 17) {
        timeStopString = "05.00 pm";
    }
    if (timeStart == 18) {
        timeStartString = "06.00 pm";
    }
    if (timeStop == 18) {
        timeStopString = "06.00 pm";
    }



    let timeString = `${timeStartString} to ${timeStopString}`
    document.getElementById("timeLimits").innerHTML = timeString;
    console.log(timeString);


    let normalHours = 0;
    let hours = document.getElementById("hoursValueStore").innerText;
    let peakCount = document.getElementById("peakValueStore").innerText;
    normalHours = hours - peakCount;
    console.log("Normal Hours :", normalHours);

    let duration = `${hours} hrs ( ${normalHours} Normal : ${peakCount} Peak)`
    document.getElementById("duration").innerHTML = duration;




    console.log(timeStart, timeStop);
    console.log(timeStartString, timeStopString)



    console.log("--------------------");

}









let today = new Date();
// console.log(today);

let dd = today.getDate();
let mm = today.getMonth() + 1;

let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = dd + '/' + mm + '/' + yyyy;

// console.log(today);






if (window.location.href == "http://127.0.0.1:5500/booking.html") {
    document.getElementById('day').innerText = today;
}







































if (window.location.href == "http://127.0.0.1:5500/details.html") {

    if (sessionStorage.getItem("local-data1") != 0) {
        document.getElementById("SLAdult").style.display = "";

        document.getElementById("sla2").innerText = sessionStorage.getItem("local-sla");
        document.getElementById("sla_Charge2").innerText = sessionStorage.getItem("local-sla_Charge");
    }

    if (sessionStorage.getItem("local-data2") != 0) {
        document.getElementById("SLChild").style.display = "";

        document.getElementById("slc2").innerText = sessionStorage.getItem("local-slc");
        document.getElementById("slc_Charge2").innerText = sessionStorage.getItem("local-slc_Charge");
    }

    if (sessionStorage.getItem("local-data3") != 0) {
        document.getElementById("foreignAdult").style.display = "";

        document.getElementById("fa2").innerText = sessionStorage.getItem("local-fa");
        document.getElementById("fa_Charge2").innerText = sessionStorage.getItem("local-fa_Charge");
    }

    if (sessionStorage.getItem("local-data4") != 0) {
        document.getElementById("foreignChild").style.display = "";

        document.getElementById("fc2").innerText = sessionStorage.getItem("local-fc");
        document.getElementById("fc_Charge2").innerText = sessionStorage.getItem("local-fc_Charge");
    }

    if (sessionStorage.getItem("local-data5") != 0) {
        document.getElementById("Infant").style.display = "";

        document.getElementById("infant2").innerText = sessionStorage.getItem("local-infant");
        document.getElementById("infant_Charge2").innerText = sessionStorage.getItem("local-infant_Charge");
    }


    document.getElementById("day2").innerText = sessionStorage.getItem("local-date");
    document.getElementById("timeLimits2").innerText = sessionStorage.getItem("local-time");
    document.getElementById("duration2").innerText = sessionStorage.getItem("local-duration");

    document.getElementById("total2").innerText = sessionStorage.getItem("local-total");

    document.getElementById("continuePurchase").disabled = true;

}














// commented function for page 2 to run

// line 470;
// line l490;


// ------------------------------------------------------------------------
// details page validation

function submit() {

    let Email1 = document.getElementById('email').value;
    let Email2 = document.getElementById('email2').value;
    let EmailError = document.getElementById('emailError');
    document.getElementById('continuePurchase').disabled = false;

    if (Email1 != Email2) {
        EmailError.style.display = '';
    } else {
        EmailError.style.display = 'none';
    }

}

function selectCountry(countryTag) {
    let x = countryTag.options[countryTag.selectedIndex].text;
    sessionStorage.setItem("local-country", x);
}


function selectGender(genderTag) {
    let x = genderTag.options[genderTag.selectedIndex].text;
    sessionStorage.setItem("local-gender", x);
}

// -----------------------------------------------------------------------












// payment page table

function btnSubmit() {


    sessionStorage.setItem("local-name", document.getElementById("name").value);
    sessionStorage.setItem("local-tel", document.getElementById("tel").value);
    sessionStorage.setItem("local-email", document.getElementById("email").value);

        
}

function btn2() {
    window.location.href = "http://127.0.0.1:5500/payment.html";
}



if (window.location.href == "http://127.0.0.1:5500/payment.html") {

    if (sessionStorage.getItem("local-data1") != 0) {
        document.getElementById("SLAdult").style.display = "";

        document.getElementById("sla2").innerText = sessionStorage.getItem("local-sla");
        document.getElementById("sla_Charge2").innerText = sessionStorage.getItem("local-sla_Charge");
    }

    if (sessionStorage.getItem("local-data2") != 0) {
        document.getElementById("SLChild").style.display = "";

        document.getElementById("slc2").innerText = sessionStorage.getItem("local-slc");
        document.getElementById("slc_Charge2").innerText = sessionStorage.getItem("local-slc_Charge");
    }

    if (sessionStorage.getItem("local-data3") != 0) {
        document.getElementById("foreignAdult").style.display = "";

        document.getElementById("fa2").innerText = sessionStorage.getItem("local-fa");
        document.getElementById("fa_Charge2").innerText = sessionStorage.getItem("local-fa_Charge");
    }

    if (sessionStorage.getItem("local-data4") != 0) {
        document.getElementById("foreignChild").style.display = "";

        document.getElementById("fc2").innerText = sessionStorage.getItem("local-fc");
        document.getElementById("fc_Charge2").innerText = sessionStorage.getItem("local-fc_Charge");
    }

    if (sessionStorage.getItem("local-data5") != 0) {
        document.getElementById("Infant").style.display = "";

        document.getElementById("infant2").innerText = sessionStorage.getItem("local-infant");
        document.getElementById("infant_Charge2").innerText = sessionStorage.getItem("local-infant_Charge");
    }


    document.getElementById("day2").innerText = sessionStorage.getItem("local-date");
    document.getElementById("timeLimits2").innerText = sessionStorage.getItem("local-time");
    document.getElementById("duration2").innerText = sessionStorage.getItem("local-duration");

    document.getElementById("total2").innerText = sessionStorage.getItem("local-total");

    document.getElementById("paymentBox").innerText = `PAY ${sessionStorage.getItem("local-total")}`;
}

function pay() {
    window.location.href = "http://127.0.0.1:5500/confirmation.html";

}


if (window.location.href == "http://127.0.0.1:5500/confirmation.html") {
    
    document.getElementById("name").innerText = sessionStorage.getItem("local-name");
    document.getElementById("day2").innerText = sessionStorage.getItem("local-date");
    document.getElementById("timeLimits2").innerText = sessionStorage.getItem("local-time");
    document.getElementById("duration2").innerText = sessionStorage.getItem("local-duration");
    document.getElementById("tel").innerText = sessionStorage.getItem("local-tel");
    document.getElementById("email").innerText = sessionStorage.getItem("local-email");

    if ((sessionStorage.getItem("local-gender")==null) || (sessionStorage.getItem("local-gender")=="Prefer Not To Say")){
        document.getElementById("gender").innerText = "Prefer Not To Say";
        } else if (sessionStorage.getItem("local-gender")=="Male") {
            document.getElementById("gender").innerText = "Male";
        } else if (sessionStorage.getItem("local-gender")=="Female") {
            document.getElementById("gender").innerText = "Female";
    }
    
    if (sessionStorage.getItem("local-data1") != 0) {
        document.getElementById("SLAdult").style.display = "";

        document.getElementById("sla2").innerText = sessionStorage.getItem("local-sla");
        document.getElementById("sla_Charge2").innerText = sessionStorage.getItem("local-sla_Charge");
    }

    if (sessionStorage.getItem("local-data2") != 0) {
        document.getElementById("SLChild").style.display = "";

        document.getElementById("slc2").innerText = sessionStorage.getItem("local-slc");
        document.getElementById("slc_Charge2").innerText = sessionStorage.getItem("local-slc_Charge");
    }

    if (sessionStorage.getItem("local-data3") != 0) {
        document.getElementById("foreignAdult").style.display = "";

        document.getElementById("fa2").innerText = sessionStorage.getItem("local-fa");
        document.getElementById("fa_Charge2").innerText = sessionStorage.getItem("local-fa_Charge");
    }

    if (sessionStorage.getItem("local-data4") != 0) {
        document.getElementById("foreignChild").style.display = "";

        document.getElementById("fc2").innerText = sessionStorage.getItem("local-fc");
        document.getElementById("fc_Charge2").innerText = sessionStorage.getItem("local-fc_Charge");
    }

    if (sessionStorage.getItem("local-data5") != 0) {
        document.getElementById("Infant").style.display = "";

        document.getElementById("infant2").innerText = sessionStorage.getItem("local-infant");
        document.getElementById("infant_Charge2").innerText = sessionStorage.getItem("local-infant_Charge");
    }

    document.getElementById("total2").innerText = sessionStorage.getItem("local-total");

}   
