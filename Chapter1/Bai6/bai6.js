const ranking =[
    { name: "Man United", score: 100 },
    { name: "Man City", score: 80 },
    { name: "Liverpool", score: 60 },
    { name: "Chelsea", score: 58 }
];

let header = `
    <tr>
        <th colspan="3">Ranking of Football Clubs</th>
    </tr>

    <tr>
        <th>STT</th>
        <th>Club</th>
        <th>Score</th>
    </tr>
`;

let footer = `
    <tr>
        <th colspan="3">End of Ranking</th>
    </tr>
`;

let content = "";

ranking.forEach((item, index) => {
    content += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.score}</td>
        </tr>
    `;        
})

document.getElementById("Ranking").innerHTML = header + content + footer;
