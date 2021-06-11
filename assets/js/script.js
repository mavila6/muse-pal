lyrics()
    .catch(error =>{
        console.log('error!');
        console.error(error);
    });

    async function lyrics() {
        const response = await fetch('https://api.lyrics.ovh/v1/beatles/yesterday');
        const data = await response.text();
        const section = data.split('\n').slice();
        
        let sectionEl = $('.lyrics-container');
        let divEl = $('<div>').addClass('.lyrics');
        
        divEl.append(section);
        sectionEl.append(divEl);
        console.log(section);
    };
    