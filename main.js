// Countdown timer

let countDownDate = new Date("Feb 5, 2024 19:00:00").getTime();

function countDown() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds

    if (distance < 0) {
        clearInterval(countDown);
        document.querySelector(".days").innerHTML = "0";
        document.querySelector(".hours").innerHTML = "0";
        document.querySelector(".minutes").innerHTML = "0";
        document.querySelector(".seconds").innerHTML = "0";
    }
}

countDown();

setInterval(countDown, 1000);



// Wish list

const buttons = document.querySelectorAll('.wishBtn');
const listCount = document.querySelector('.list_count');

let count = 0;

buttons.forEach((button) => {
    button.addEventListener('click', clickHandler);
});

function clickHandler(ev) {
        
    const id = ev.target.getAttribute('data-id');
    const img = ev.target.getAttribute('data-img');
    
    obj = {
        id: id,
        img: img
    }
    // console.log(obj);
    
    const existingList = localStorage.getItem('wishList');
    let existingListArray = JSON.parse(existingList) ?? [];

    const isAlreadyInList = existingListArray.some((item) => {
        return item.id === obj.id;
    });


    if (isAlreadyInList) {
        existingListArray = existingListArray.filter((existingItem) => {
            return existingItem.id !== obj.id;  
        });
    } else {
        existingListArray.push(obj);
        // console.log(existingListArray);
       
    }
    
    count = existingListArray.length;

    if (count >= 0) {
        listCount.style.display = 'flex';
        listCount.innerHTML = count;
    } else {
        listCount.style.display = 'none';
    }

    if (ev.target.classList.contains('fa-regular')) {
        ev.target.classList.remove('fa-regular');
        ev.target.classList.add('fa-solid');
    } else {
        ev.target.classList.remove('fa-solid');
        ev.target.classList.add('fa-regular');
    }

    localStorage.setItem('wishList', JSON.stringify(existingListArray));
    
};
