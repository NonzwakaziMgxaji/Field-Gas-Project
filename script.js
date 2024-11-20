var map = L.map('map').setView([-33.9258, 18.4232], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
}).addTo(map);

var ubuntu = [
    L.marker([-33.6486367,18.9912836,17]).bindPopup('<b>Bergrivier High School</b><br>Number of learners: 150<br>Number of food preparers: 1<br>CoA Status: Issued<br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.0865877,18.8301079,17]).bindPopup('<b>Dani Ackerman Primary School</b><br>Number of learners: 140<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.0862458,18.8313865,17]).bindPopup('<b>Gordon High School</b><br>Number of learners: 90<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.0922768,18.842052]).bindPopup('<b>Hottentots-Holland High School</b><br>Number of learners: 90<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-33.7367089,18.9885945,17]).bindPopup('<b>Klein Nederburg Secondary School</b><br>Number of learners: 200<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.1323115,18.4294571,17]).bindPopup('<b>Paul Greyling Primary School</b><br>Number of learners: 46<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.0478856,18.5193823,17]).bindPopup('<b>Pelican Park High School</b><br>Number of learners: 50<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.0312418,18.500579,17]).bindPopup('<b>Plantation Primary School</b><br>Number of learners: 154<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.1975458,18.4431671,17]).bindPopup('<b>Simons Town High School</b><br>Number of learners: 200<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.0565219,18.4784881,17]).bindPopup('<b>St Marys Primary School</b><br>Number of learners: 180<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.0440617,18.5077176,17]).bindPopup('<b>St Clements RC Primary School</b><br>Number of learners: 100<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.0319135,18.5201905,17]).bindPopup('<b>Stephen Road Primary School</b><br>Number of learners: 250<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-33.6451655,18.9960951,17]).bindPopup('<b>Wellington Primary School</b><br>Number of learners: 450<br>Number of food preparers: 3<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
    L.marker([-34.0733614,18.4342234,17]).bindPopup('<b>Westlake Primary School</b><br>Number of learners: 250<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: UBUNTU Village'),
];
var multigas = [
    L.marker([-34.0543968, 18.6333618]).bindPopup('<b>A Z Berman High School</b><br>Number of learners: 68<br>Number of food preparers: <br>CoA Status: <br>CoC Status: Issued<br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-34.022108, 18.7227908]).bindPopup('<b>Axios School of Skills</b><br>Number of learners: 105<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: Issued<br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-34.0116774,18.5018104,15]).bindPopup('<b>Battswood Primary School</b><br>Number of learners: 100<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: Issued<br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-34.045565,18.6250309,17]).bindPopup('<b>Beacon Hill High School</b><br>Number of learners: 80<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: Issued<br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-33.8569946,18.7135634,17]).bindPopup('<b>Eikendal Primary School</b><br>Number of learners: 108<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-33.9879797,18.7100139,17]).bindPopup('<b>Kleinvlei Secondary School</b><br>Number of learners: 120<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: Issued<br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-33.9703001,18.6331993,17]).bindPopup('<b>Leiden High School</b><br>Number of learners: 419<br>Number of food preparers: 3<br>CoA Status: <br>CoC Status: Issued<br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-33.9556985,18.5566146,17]).bindPopup('<b>Modderdam High School</b><br>Number of learners: 80<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-34.0398145,18.6081302,17]).bindPopup('<b>Portlands High School</b><br>Number of learners: 105<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: Issued<br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-33.9272716,18.6636654,17]).bindPopup('<b>Sarepta High School</b><br>Number of learners: 153<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: Multigas Distributors'),  
    L.marker([-33.9731489,18.6818761,17]).bindPopup('<b>Sing for African </b><br>Number of learners: 65<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: Multigas Distributors'),
    L.marker([-34.0005485,18.7017525,17]).bindPopup('<b>Tuscany Primary School</b><br>Number of learners: 50<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: Multigas Distributors'),
];
var dmj = [
    L.marker([-33.963961, 18.509641]).bindPopup('<b>Alicedale Primary School</b><br>Number of learners: 210<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.93532, 18.45088]).bindPopup('<b>Alpha School for Autism</b><br>Number of learners: 50<br>Number of food preparers: 0<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.971618,18.5160523,17]).bindPopup('<b>Belgravia High School</b><br>Number of learners: 105<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: Issued<br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.9249499,18.5818239,17]).bindPopup('<b>Cravenby High School</b><br>Number of learners: 150<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.9172151,18.5052661,17]).bindPopup('<b>H. J. Kroneberg Primary School</b><br>Number of learners: 200<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.9497145,18.5844504,17]).bindPopup('<b>John Ramsay High School</b><br>Number of learners: 70<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.9076954,18.5041344,17]).bindPopup('<b>Kensington High School</b><br>Number of learners: 100<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.9209573,18.4785349,17]).bindPopup('<b>A Z Koeberg Primary School</b><br>Number of learners: 198<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.9852639,18.5311648,17]).bindPopup('<b>Newfields Primary School</b><br>Number of learners: 140<br>Number of food preparers: 1<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.9280496,18.5983206,17]).bindPopup('<b>Ravensmead High School</b><br>Number of learners: 175<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.9234839,18.4096546,17]).bindPopup('<b>St Pauls Primary School</b><br>Number of learners: 235<br>Number of food preparers: 2<br>CoA Status: <br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
    L.marker([-33.970406,18.5103367,17]).bindPopup('<b>Sunnyside Primary Primary School</b><br>Number of learners: 133<br>Number of food preparers: 2<br>CoA Status: Issued<br>CoC Status: <br>Score card: GREEN<br>Service provider: DMJ Mechanicals'),
];

var allSchools = ubuntu.concat(multigas).concat(dmj);

function showSchools(schools) {
    schools.forEach(function (school) {
        school.addTo(map);
    });
}

function hideSchools(schools) {
    schools.forEach(function (school) {
        map.removeLayer(school);
    });
}

showSchools(allSchools);

function filterSchools(color) {
    hideSchools(allSchools);
    if (color === 'red') {
        showSchools(ubuntu);
    } else if (color === 'green') {
        showSchools(multigas);
    } else if (color === 'yellow') {
        showSchools(dmj);
    } else {
        showSchools(allSchools);
    }
}

const ctx1 = document.getElementById('schoolChart').getContext('2d');
const schoolChart = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Primary Schools', 'High Schools'],
        datasets: [{
            data: [0, 0],
            backgroundColor: ['#36a2eb', '#ff6384']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 15,
                    padding: 10
                }
            },
            tooltip: {
                enabled: true
            }
        }
    }
});

const ctx2 = document.getElementById('serviceProviderChart').getContext('2d');
const serviceProviderChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Multigas Distributors', 'UBUNTU Village', 'DMJ Mechanicals'],
        datasets: [{
            data: [0, 0, 0],
            backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 15,
                    padding: 10
                }
            },
            tooltip: {
                enabled: true
            }
        }
    }
});


function categorizeSchools(schools) {
    let primaryCount = 0;
    let highSchoolCount = 0;

    schools.forEach(function (school) {
        var schoolName = school._popup._content.split('<b>')[1].split('</b>')[0];

        if (schoolName.toLowerCase().includes('primary')) {
            primaryCount++;
        } else {
            highSchoolCount++;
        }
    });

    return { primaryCount, highSchoolCount };
}

function categorizeServiceProviders(schools) {
    let multigasCount = 0;
    let ubuntuVillageCount = 0;
    let dmjMechanicalsCount = 0;

    schools.forEach(function (school) {
        var provider = school._popup._content.split('Service provider: ')[1];

        if (provider.toLowerCase().includes('multigas')) {
            multigasCount++;
        } else if (provider.toLowerCase().includes('ubuntu village')) {
            ubuntuVillageCount++;
        } else if (provider.toLowerCase().includes('dmj mechanicals')) {
            dmjMechanicalsCount++;
        }
    });

    return { multigasCount, ubuntuVillageCount, dmjMechanicalsCount };
}

function updateCharts() {
    const { primaryCount, highSchoolCount } = categorizeSchools(multigas.concat(ubuntu, dmj));
    const { multigasCount, ubuntuVillageCount, dmjMechanicalsCount } = categorizeServiceProviders(multigas.concat(ubuntu, dmj));

    schoolChart.data.datasets[0].data = [primaryCount, highSchoolCount];
    schoolChart.update();

    serviceProviderChart.data.datasets[0].data = [multigasCount, ubuntuVillageCount, dmjMechanicalsCount];
    serviceProviderChart.update();
}

updateCharts();

