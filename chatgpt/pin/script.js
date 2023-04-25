let form = document.querySelector('form');
let pincodeInput = document.querySelector('#pincode');
let results = document.querySelector('#results');

form.addEventListener('submit', e => {
    e.preventDefault();
    const pincode = pincodeInput.value.trim();
    if (!pincode) return;

    // First fetch the details of the pincode
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(res => res.json())
        .then(data => {
            if (data[0].Status === "Success") {
                console.log(data[0].PostOffice.length);
                for (let i = 0; i < data[0].PostOffice.length; i++) {
                    const e = data[0].PostOffice[i];
                    console.log(e);

                    const postOffice = data[0].PostOffice[i];
                    let html = `<h2>Details for ${pincode}</h2>`;
                    html += `<p>Post Office Name: ${postOffice.Name}</p>`;
                    html += `<p>Region: ${postOffice.Region}</p>`;
                    html += `<p>Circle: ${postOffice.Circle}</p>`;
                    html += `<p>Division: ${postOffice.Division}</p>`;
                    html += `<p>District: ${postOffice.District}</p>`;
                    html += `<p>State: ${postOffice.State}</p>`;
                    html += `<p>Country: ${postOffice.Country}</p>`;
                    html += `<p>Pincode: ${postOffice.Pincode}</p>`;
                    results.innerHTML = html;
                    fetch(`https://api.postalpincode.in/postoffice/${postOffice.Name}`).then(res => res.json()).then(data => {
                        if (data[0].Status === "Success") {
                            const postOffices = data[0].PostOffice;
                            let tableHtml = `<h2>Post Offices for ${pincode}</h2>`;
                            tableHtml += "<table><thead><tr><th>Name</th><th>Description</th><th>Branch Type</th><th>Delivery Status</th></tr></thead><tbody>";
                            postOffices.forEach(postOffice => {
                                tableHtml += `<tr><td>${postOffice.Name}</td><td>${postOffice.Description}</td><td>${postOffice.BranchType}</td><td>${postOffice.DeliveryStatus}</td></tr>`
                            }); tableHtml += "</tbody></table>";
                            results.innerHTML += tableHtml;
                        } else {
                            results.innerHTML += "<p>No post offices found for ${pincode}</p>";
                        }
                    }).catch(err => console.error(err));
                }
            } else { results.innerHTML = "<p>No details found for ${pincode}</p>" }
        }).catch(err => console.error(err));
});

function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}  