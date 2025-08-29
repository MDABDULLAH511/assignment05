// ==========01. Heart Count Functionality ==========

let heartCount = 0;
const heartCountNumber = document.getElementById('heart-count');
const hearts = document.getElementsByClassName('heart');

for (const heart of hearts) {
    heart.addEventListener('click', function (e) {
        heartCount++;
        heartCountNumber.innerText = heartCount;
    });
}

// ==========02. call Buttons Functionality ==========
// Shared Function
// Get Inner text -- Function
function getinnertext(id) {
    const innerText = document.getElementById(id).innerText;
    return innerText;
}

// Get Inner Text Number -- Function
function getinnertextNumber(id) {
    const innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
}

// Function to Call Buttons for all Services
function callBtnFunction(idName, idNumber) {
    const serviceName = getinnertext(idName);
    const serviceNumber = getinnertext(idNumber);
    let availableCoin = getinnertextNumber('available-coin');

    if (availableCoin >= 20) {

        availableCoin -= 20;
        document.getElementById('available-coin').innerText = availableCoin;
        alert('📞 Calling ' + serviceName + ' ' + serviceNumber + ' ...')
    }

    else {
        alert(" 💰❌ You don't have enough coins. You need at least 20 coins to call.");
    }

    // Call History Added
    const time = new Date().toLocaleTimeString();
    const callHistoryContainer = document.getElementById('call-history-container');

    const div = document.createElement('div')
    div.innerHTML = `
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#FAFAFA] p-4 rounded-[8px]">
            <div>
                <h3 class="text-[18px] font-semibold text-[#111111] mb-1">${serviceName}</h3>
                <p class="text-[18px] text-[#5C5C5C]">${serviceNumber}</p>
            </div>
                <p class="text-[18px] text-[#5C5C5C]"> ${time} </p>
        </div>
       `

    callHistoryContainer.appendChild(div)

}

// National Emergency Number
document.getElementById('national-emergency-call-btn').addEventListener('click', function (e) {
    callBtnFunction('national-emergency', 'national-emergency-number');
})

// Police Helpline
document.getElementById('police-helpline-call-btn').addEventListener('click', function (e) {
    callBtnFunction('police-helpline', 'police-helpline-number');
})

// Fire Service Number
document.getElementById('fire-service-call-btn').addEventListener('click', function (e) {
    callBtnFunction('fire-service', 'fire-service-number')
})

// Ambulance Service
document.getElementById('ambulance-service-call-btn').addEventListener('click', function (e) {
    callBtnFunction('ambulance-service', 'ambulance-service-number')
})

// Brac Helpline
document.getElementById('brac-helpline-call-btn').addEventListener('click', function (e) {
    callBtnFunction('brac-helpline', 'brac-helpline-number')
})

// Brac Helpline
document.getElementById('bangladesh-railway-call-btn').addEventListener('click', function (e) {
    callBtnFunction('bangladesh-railway', 'bangladesh-railway-number')

})
