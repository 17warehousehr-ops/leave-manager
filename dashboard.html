<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard | Warehouse Attendance</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2563eb;
            --primary-light: #eff6ff;
            --primary-dark: #1e40af;
            --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            --text-dark: #0f172a;
            --text-light: #64748b;
            --glass: rgba(255, 255, 255, 0.85);
            --border: rgba(255, 255, 255, 0.6);
        }

        * { box-sizing: border-box; font-family: 'Inter', sans-serif; }

        body {
            margin: 0;
            background: var(--bg-gradient);
            background-attachment: fixed;
            color: var(--text-dark);
            min-height: 100vh;
            padding: 20px 15px;
        }

        .container { max-width: 1000px; margin: 0 auto; }

        .glass-card {
            background: var(--glass);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 25px 30px;
            margin-bottom: 25px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .user-profile { display: flex; align-items: center; gap: 18px; }

        .avatar {
            width: 56px; height: 56px; background: var(--primary);
            color: white; border-radius: 16px; display: flex;
            align-items: center; justify-content: center;
            font-weight: 800; font-size: 22px;
            box-shadow: 0 8px 15px rgba(37, 99, 235, 0.25);
        }

        .main-content {
            background: var(--glass);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            border-radius: 30px;
            padding: 40px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
        }

        table { width: 100%; border-collapse: separate; border-spacing: 0 8px; }
        th { text-align: left; padding: 0 15px 15px 15px; color: var(--text-light); font-size: 13px; font-weight: 700; text-transform: uppercase; }
        
        tr.data-row td { background: white; padding: 18px 15px; font-size: 15px; font-weight: 500; }
        tr.data-row td:first-child { border-radius: 16px 0 0 16px; }
        tr.data-row td:last-child { border-radius: 0 16px 16px 0; }

        .badge { padding: 6px 12px; border-radius: 10px; font-size: 12px; font-weight: 700; display: inline-block; }
        .badge-sick { background: #fee2e2; color: #b91c1c; }
        .badge-casual { background: #dcfce7; color: #15803d; }
        .badge-annual { background: #e0f2fe; color: #0369a1; }
        .badge-lwp { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; }

        .btn-mark { 
            background: var(--primary); color: white; border: none; 
            padding: 10px 20px; border-radius: 12px; cursor: pointer; 
            font-weight: 700; transition: all 0.2s;
        }

        .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(8px); z-index: 1000; }
        .modal-content { background: white; width: 92%; max-width: 440px; margin: 8% auto; padding: 40px; border-radius: 32px; }
        
        input, select { width: 100%; padding: 14px; border: 1.5px solid #e2e8f0; border-radius: 14px; margin-bottom: 20px; }
    </style>
</head>
<body>

<div class="container">
    <div class="glass-card">
        <div class="user-profile">
            <div class="avatar" id="avatar">W</div>
            <div>
                <h2 id="greeting">Hello!</h2>
                <div class="sup-id-label" id="sup-id"></div>
            </div>
        </div>
        <button onclick="logout()" style="background:none; border:none; color:#ef4444; font-weight:700; cursor:pointer;">Logout</button>
    </div>

    <div class="main-content">
        <h3>Team Members</h3>
        <table>
            <thead><tr><th>ID</th><th>Name</th><th>Action</th></tr></thead>
            <tbody id="team-list"></tbody>
        </table>

        <h3 style="margin-top: 50px;">Recent Activity</h3>
        <table>
            <thead><tr><th>Emp ID</th><th>Date</th><th>Type</th></tr></thead>
            <tbody id="history-list"></tbody>
        </table>
    </div>
</div>

<div id="leaveModal" class="modal">
    <div class="modal-content">
        <h3 id="targetName">Mark Leave</h3>
        <input type="hidden" id="targetId">
        <label>From</label><input type="date" id="fromDate">
        <label>To</label><input type="date" id="toDate">
        <label>Type</label>
        <select id="leaveType">
            <option value="Sick">Sick Leave</option>
            <option value="Casual">Casual Leave</option>
            <option value="Annual">Annual Leave</option>
            <option value="LWP">Leave Without Pay</option>
        </select>
        <button id="subBtn" onclick="submitLeave()" style="width:100%; padding:16px; background:var(--primary); color:white; border:none; border-radius:14px; font-weight:700;">Save Entry</button>
        <button onclick="closeModal()" style="width:100%; margin-top:10px; background:none; border:none; color:gray; cursor:pointer;">Cancel</button>
    </div>
</div>

<script src="dashboard-script.js"></script>
</body>
</html>
