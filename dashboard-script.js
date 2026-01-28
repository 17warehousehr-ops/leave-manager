const scriptURL = "https://script.google.com/macros/s/AKfycbzMN7fUpvsFvkTAwf5-3XAHOyqga5aoNEEZ-4GFQuvXKyYOKnyA4dZ0KsjnHAl2u5KE8Q/exec";

window.onload = function() {
    const id = localStorage.getItem("supervisorId");
    const name = localStorage.getItem("supervisorName");
    if (!id) { window.location.href = "index.html"; return; }

    document.getElementById("greeting").innerText = `Good Day, ${name}`;
    document.getElementById("sup-id").innerText = `ID: ${id}`;
    document.getElementById("avatar").innerText = name.charAt(0).toUpperCase();

    // 1. Instant Load from Cache
    const cachedTeam = localStorage.getItem("teamData");
    if (cachedTeam) {
        displayTeam(JSON.parse(cachedTeam));
    }

    // 2. Background Refresh (Updates the list silently)
    loadTeam(id);
    loadHistory(id);
};

function loadTeam(supId) {
    fetch(`${scriptURL}?action=getTeam&teamCode=${supId}`)
    .then(res => res.json())
    .then(data => {
        // Save to cache for next time
        localStorage.setItem("teamData", JSON.stringify(data));
        displayTeam(data);
    })
    .catch(err => console.error("Could not refresh team in background", err));
}

// Helper function to show the list on screen
function displayTeam(data) {
    const list = document.getElementById("team-list");
    list.innerHTML = "";
    data.forEach(emp => {
        list.innerHTML += `<tr>
            <td>${emp.empId}</td>
            <td>${emp.empName}</td>
            <td><button onclick="openModal('${emp.empId}','${emp.empName}')" style="background:#2563eb; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Mark</button></td>
        </tr>`;
    });
}

function loadHistory(supId) {
    fetch(`${scriptURL}?action=getHistory&supervisorId=${supId}`)
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById("history-list");
        list.innerHTML = "";
        data.forEach(h => {
            const badgeClass = h.type.toLowerCase();
            list.innerHTML += `<tr><td>${h.empId}</td><td>${h.date}</td><td><span class="badge badge-${badgeClass}">${h.type}</span></td></tr>`;
        });
    });
}

function openModal(id, name) {
    document.getElementById("targetId").value = id;
    document.getElementById("targetName").innerText = name;
    document.getElementById("leaveModal").style.display = "block";
}

function closeModal() { document.getElementById("leaveModal").style.display = "none"; }

function submitLeave() {
    const btn = document.getElementById("subBtn");
    btn.disabled = true;
    btn.innerText = "Processing...";

    const payload = {
        action: "leave",
        empId: document.getElementById("targetId").value,
        fromDate: document.getElementById("fromDate").value,
        toDate: document.getElementById("toDate").value,
        leaveType: document.getElementById("leaveType").value,
        supervisorId: localStorage.getItem("supervisorId")
    };

    fetch(scriptURL, { method: 'POST', body: JSON.stringify(payload) })
    .then(res => res.json())
    .then(response => {
        btn.disabled = false;
        btn.innerText = "Save Entry";
        if (response.success) {
            alert("Success!");
            closeModal();
            loadHistory(localStorage.getItem("supervisorId"));
        } else {
            alert("Error: " + response.error);
        }
    })
    .catch(() => {
        alert("System error. Try again.");
        btn.disabled = false;
        btn.innerText = "Save Entry";
    });
}

function logout() { 
    localStorage.clear(); 
    window.location.href = "index.html"; 
}
