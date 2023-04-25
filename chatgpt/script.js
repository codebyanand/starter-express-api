const form = document.querySelector('form');
const pincodeInput = document.querySelector('#pincode');
const results = document.querySelector('#results');

form.addEventListener('submit', e => {
    e.preventDefault();
    const pincode = pincodeInput.value.trim();
    if (!pincode) return;
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(res => res.json())
        .then(data => displayResults(data))
        .catch(err => console.error(err));
});

function displayResults(data) {
    results.style.display = 'block';
    results.innerHTML = `<h2>${data[0].Message}</h2>`;
    if (data[0].PostOffice.length > 0) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        const headers = ['Name', 'Description', 'Branch Type', 'Delivery Status', 'Circle', 'District', 'Division', 'Region', 'Block', 'State', 'Country', 'Pincode'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        data[0].PostOffice.forEach(postOffice => {
            const tr = document.createElement('tr');
            const tdName = document.createElement('td');
            tdName.textContent = postOffice.Name || '-';
            const tdDescription = document.createElement('td');
            tdDescription.textContent = postOffice.Description || '-';
            const tdBranchType = document.createElement('td');
            tdBranchType.textContent = postOffice.BranchType || '-';
            const tdDeliveryStatus = document.createElement('td');
            tdDeliveryStatus.textContent = postOffice.DeliveryStatus || '-';
            const tdCircle = document.createElement('td');
            tdCircle.textContent = postOffice.Circle || '-';
            const tdDistrict = document.createElement('td');
            tdDistrict.textContent = postOffice.District || '-';
            const tdDivision = document.createElement('td');
            tdDivision.textContent = postOffice.Division || '-';
            const tdRegion = document.createElement('td');
            tdRegion.textContent = postOffice.Region || '-';
            const tdBlock = document.createElement('td');
            tdBlock.textContent = postOffice.Block || '-';
            const tdState = document.createElement('td');
            tdState.textContent = postOffice.State || '-';
            const tdCountry = document.createElement('td');
            tdCountry.textContent = postOffice.Country || '-';
            const tdPincode = document.createElement('td');
            tdPincode.textContent = postOffice.Pincode || '-';
            tr.appendChild(tdName);
            tr.appendChild(tdDescription);
            tr.appendChild(tdBranchType);
            tr.appendChild(tdDeliveryStatus);
            tr.appendChild(tdCircle);
            tr.appendChild(tdDistrict);
            tr.appendChild(tdDivision);
            tr.appendChild(tdRegion);
            tr.appendChild(tdBlock);
            tr.appendChild(tdState);
            tr.appendChild(tdCountry);
            tr.appendChild(tdPincode);
            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        results.appendChild(table);
    } else {
        results.innerHTML += '<p>No post offices found for this pincode</p>';
    }
}