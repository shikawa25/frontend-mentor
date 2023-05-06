(function () {
    fetch(
        'https://raw.githubusercontent.com/shikawa25/frontend-mentor/main/results-summary-component/data.json'
    )
        .then((response) => response.json())
        .then((json) => {
            const resultScore = document.querySelector('.result-score');
            const mean = getMean(json);
            const resultInfo = document.querySelector('.result-info');
            if (mean >= 70) {
                resultInfo.innerHTML = `
                <h2 class="result-ranking">Great</h2>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
                `;
            }
            resultScore.innerHTML = `
            <span class="score-accent">${mean}</span>
            of 100
            `;

            json.forEach((item, index) => {
                const categoryDiv = document.querySelector(
                    `.summary-item-accent-${index + 1}`
                );
                const flexDiv = document.createElement('div');
                flexDiv.classList.add('flex-group');
                flexDiv.innerHTML = `
            <img src="${item['icon']}" alt="${item['category']} icon">
            <h3 class="summary-item-title">${item['category']}</h3>
            `;
                categoryDiv.appendChild(flexDiv);
                const p = document.createElement('p');
                p.classList.add('summary-item-score');
                p.innerHTML = `
            <span class="summary-score-accent">${item['score']}</span> / 100
            `;
                categoryDiv.appendChild(p);
            });

            const component = document.querySelector('.component');
            component.classList.remove('hidden');;
        })
        .catch((e) => console.log(e));


    function getMean(j) {
        return Math.round(
            j.reduce((total, { score }) => total + score, 0) / j.length
        );
    }
})();
