function handleSubmit(event) {
    event.preventDefault(); 
    alert("Pesan kamu sudah terkirim, terimakasih!"); 
    document.getElementById("contactForm").reset(); 
}

function toggleDetails(detailsId, buttonId) {
    var details = document.getElementById(detailsId);
    var button = document.getElementById(buttonId);

    if (details.style.display === "none") {
        // Show the hidden content
        details.style.display = "block";
        button.innerHTML = "Sembunyikan";
        button.classList.add("active"); 
    } else {
        // Hide the content
        details.style.display = "none";
        button.innerHTML = "Lihat Selengkapnya";  
        button.classList.remove("active"); 
    }
}
