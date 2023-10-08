

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../filejson/proposal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const judulElement = document.getElementById("judul-proposal");
        const konsepElement = document.getElementById("konsep-proposal");
        const prodiElement = document.getElementById("prodi-proposal");
        const judul1Element = document.getElementById("judul-1");
        const isi1Element = document.getElementById("isi-1");
        const isi2Element = document.getElementById("isi-2");
        const isi3Element = document.getElementById("isi-3");
        const isi4Element = document.getElementById("isi-4");
        const judul2Element = document.getElementById("judul-2");
        const isi5Element = document.getElementById("isi-5");
        const isi6Element = document.getElementById("isi-6");
        const judul3Element = document.getElementById("judul-3");
        const isi7Element = document.getElementById("isi-7");
        const isi8Element = document.getElementById("isi-8");
        const isi9Element = document.getElementById("isi-9");
        const isi10Element = document.getElementById("isi-10");



        // Populate HTML elements with user data
        judulElement.textContent = userData.Judul;
        konsepElement.textContent = userData.Konsep;
        prodiElement.textContent = userData.Prodi;
        judul1Element.textContent = userData.Judul1;
        isi1Element.textContent = userData.Isi1;
        isi2Element.textContent = userData.Isi2;
        isi3Element.textContent = userData.Isi3;
        isi4Element.textContent = userData.Isi4;
        judul2Element.textContent = userData.Judul2;
        isi5Element.textContent = userData.Isi5;
        isi6Element.textContent = userData.Isi6;
        judul3Element.textContent = userData.Judul3;
        isi7Element.textContent = userData.Isi7;
        isi8Element.textContent = userData.Isi8;
        isi9Element.textContent = userData.Isi9;
        isi10Element.textContent = userData.Isi10;


    } catch (error) {
        console.error('Error:', error);
    }
});