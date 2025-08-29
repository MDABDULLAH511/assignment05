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

// ==========02.03. call Buttons Functionality ==========
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
        document.getElementById('history-clear-btn').addEventListener('click', function (e) {
            callHistoryContainer.innerText = " ";
        })
    }

    else {
        alert(" 💰❌ You don't have enough coins. You need at least 20 coins to call.");
    }
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


// Challenges Part
// Shared Function
// ==========04. Copy Count Functionality ==========
// let copyCount = 0;
// const copyCountNumber = document.getElementById('copy-count');
// const copyBtns = document.getElementsByClassName('copy-btn');
// for (const copyBtn of copyBtns) {
//     copyBtn.addEventListener('click', function (e) {
//         copyCount++;
//         copyCountNumber.innerText = copyCount;
//     })


// }
// // ==========04. Copy Alert Functionality ==========
// function copyBtnFunction(number) {
//     const serviceNumber = getinnertext(number);
//     alert('Copied ' + serviceNumber);
// }

// --- COPY COUNTER (global) ---
let copyCount = 0;
const copyCountNumber = document.getElementById('copy-count');

// ---------- helper: copy to clipboard (with fallback) ----------
async function copyToClipboard(text) {
    try {
        // trim to remove extra spaces from your HTML
        const value = String(text).trim();

        if (!value) return Promise.reject(new Error('Nothing to copy'));

        if (navigator.clipboard && window.isSecureContext) {
            // modern secure clipboard API (works on HTTPS or localhost)
            await navigator.clipboard.writeText(value);
        } else {
            // fallback for insecure context - textarea + execCommand
            const ta = document.createElement('textarea');
            ta.value = value;
            ta.style.position = 'fixed'; // avoid scrolling to bottom
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
}

// ---------- main function (used by your existing buttons) ----------
async function copyBtnFunction(numberId) {

    const serviceNumber = getinnertext(numberId).trim();

    if (!serviceNumber) {
        alert('Nothing to copy.');
        return;
    }

    try {
        await copyToClipboard(serviceNumber);

        // increment and update copy counter
        copyCount++;
        copyCountNumber.innerText = copyCount;

        // feedback (alert). You can replace with custom UI if you want later.
        alert('📋 Copied ' + serviceNumber);
    } catch (err) {
        console.error('Copy failed:', err);
        alert('Copy failed. Please copy manually.');
    }
}

// National Emergency Number
document.getElementById('national-emergency-copy-btn').addEventListener('click', function (e) {
    copyBtnFunction('national-emergency-number');
})

// Police Helpline
document.getElementById('police-helpline-copy-btn').addEventListener('click', function (e) {
    copyBtnFunction('police-helpline-number');
})

// Fire Service Number
document.getElementById('fire-service-copy-btn').addEventListener('click', function (e) {
    copyBtnFunction('fire-service-number')
})

// Ambulance Service
document.getElementById('ambulance-service-copy-btn').addEventListener('click', function (e) {
    copyBtnFunction('ambulance-service-number')
})

// Brac Helpline
document.getElementById('brac-helpline-copy-btn').addEventListener('click', function (e) {
    copyBtnFunction('brac-helpline-number')
})

// Brac Helpline
document.getElementById('bangladesh-railway-copy-btn').addEventListener('click', function (e) {
    copyBtnFunction('bangladesh-railway-number')

})

