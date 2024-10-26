document.getElementById('toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar.style.width === '50px') {
        sidebar.style.width = '50px';
        mainContent.style.marginLeft = '250px';
    } else {
        sidebar.style.width = '60px';
        mainContent.style.marginLeft = '60px';
    }
});

$(document).ready(function() {
    $('#sales-table').DataTable();
    
    // Data untuk diagram
    const salesData = {
        labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [{
            label: 'Penjualan',
            data: [120, 150, 180, 200, 160, 140, 210, 190, 230, 250, 220, 300],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
    
    // Opsi untuk diagram
    const config = {
        type: 'bar',
        data: salesData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Jumlah Penjualan'
                    }
                }
            }
        }
    };
    
    // Inisialisasi chart
    const salesChart = new Chart(
        document.getElementById('salesChart'),
        config
    );
});
