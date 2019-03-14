var period = document.getElementById("period"),
    refreshPeriod = parseInt(period.value),
    prototype = document.getElementById("prototype"),
    btnAdd = document.querySelectorAll("input.add"),
    removers = document.querySelectorAll("input.remove"),
    newClone, ourData;


//должна возвращать массив из данных
period.addEventListener("change", function () {
    var request = new XMLHttpRequest();

    request.open("GET", "value.json");

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            //console.log("Sorry");
            ourData = JSON.parse(request.responseText);
            //alert(ourData);
            alert(ourData.length);

            for (var m = 0; m < ourData.length; m++) {
                if (ourData[m] === "usd") {
                    console.log(ourData[m].bid);
                }
            }

            // } else {
            //     console.log("Sorry, but we are stupid jerks.");
            // }
        };

    };
    request.send();
});


// // ФУНКЦИЯ возвращает период обновления AJAX request
// // period.addEventListener("change", function () {
// //     refreshPeriod = parseInt(period.value);
//     return console.log(refreshPeriod); // должно быть закомментировано
//     //return refreshPeriod; // возвращает в осн программу период обновления
// });


// setInterval(function () {
//     console.log("Fuck!")
// }, refreshPeriod);


for (var i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click", function () {
        var that = this,
            caption = this.parentNode.firstChild.innerHTML,                   // btnAdd.
            numer = caption.split(" / ")[0],
            denom = caption.split(" / ")[1];


        newClone = prototype.cloneNode(true);
        prototype.parentNode.appendChild(newClone);

        newClone.style.display = "block";

        table = newClone.getElementsByTagName("td")[0];
        table.innerHTML = caption;


        removers = document.querySelectorAll("input.remove");

        for (var j = 0; j < removers.length; j++) {
            removers[j].addEventListener("click", function () {
                this.parentNode.style.display = "none";
            })

        }

    });

}

console.log(btnAdd);

// for (var i = 0; i < btnAdd.length; i++) {
//     console.log(btnAdd[i].parentNode.firstChild.innerHTML);
// }

function fillingClones(that) {    // that это итерация цикла обработчиков
    var caption = that.parentNode.firstChild.innerHTML.split(" / "),                   // btnAdd.
        numer = caption[0],
        denom = caption[1];

    return caption;

}


// ФУНКЦИЯ вешает обработчики на все кнопки Add циклом, после добавления клона
// его кнопка Remove добавляется в массив кнопок удаления и по этому массиву
// заново развешивается обработчики удаления.

// Создан невидымий див с данными визибилити хидден, он - прототип всех остальных дивов результатов.
// Внутри него таблица результатов и кнопка РЕМУВ. По клику на любую кнопку АДД создается
// клон невидимого дива, в него парсятся результаты из ДЖСОН файла.Если целевой див создан, то
// новый создать нельзя.




