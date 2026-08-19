// ಆಟೋಮ್ಯಾಟಿಕ್ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ ಹೊಸ ಎಂಟ್ರಿ ಸೇರಿಸುವ ಫಂಕ್ಷನ್
function addRow() {
    var date = document.getElementById("date").value;
    var particulars = document.getElementById("particulars").value;

    if (!date || !particulars) {
        alert("ದಯವಿಟ್ಟು ದಿನಾಂಕ ಮತ್ತು ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ!");
        return;
    }

    // ಅನುದಾನಗಳ ಮೊತ್ತ ಪಡೆದುಕೊಳ್ಳುವುದು
    var schoolGrant = parseFloat(document.getElementById("schoolGrant").value) || 0;
    var ptaMeeting = parseFloat(document.getElementById("ptaMeeting").value) || 0;
    var ecoClub = parseFloat(document.getElementById("ecoClub").value) || 0;
    var lbaGrant = parseFloat(document.getElementById("lbaGrant").value) || 0;
    var udiseGrant = parseFloat(document.getElementById("udiseGrant").value) || 0;
    var sdmcTraining = parseFloat(document.getElementById("sdmcTraining").value) || 0;
    var libraryGrant = parseFloat(document.getElementById("libraryGrant").value) || 0;
    var tlmGrant = parseFloat(document.getElementById("tlmGrant").value) || 0;

    // ಆಟೋಮ್ಯಾಟಿಕ್ ಟೋಟಲ್ ಲೆಕ್ಕಾಚಾರ
    var total = schoolGrant + ptaMeeting + ecoClub + lbaGrant + udiseGrant + sdmcTraining + libraryGrant + tlmGrant;

    // ಟೇಬಲ್‌ಗೆ ಹೊಸ ರೋ ಸೇರಿಸುವುದು
    var tableBody = document.getElementById("tableBody");
    var newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${date}</td>
        <td>${particulars}</td>
        <td>${schoolGrant}</td>
        <td>${ptaMeeting}</td>
        <td>${ecoClub}</td>
        <td>${lbaGrant}</td>
        <td>${udiseGrant}</td>
        <td>${sdmcTraining}</td>
        <td>${libraryGrant}</td>
        <td>${tlmGrant}</td>
        <td><strong>${total}</strong></td>
    `;

    // ಫಾರ್ಮ್ ಕ್ಲಿಯರ್ ಮಾಡುವುದು
    document.getElementById("ledgerForm").reset();
}
