//called lyrics() function and used .catch to log any errors that may occur in the console//
lyrics()
    .catch(error =>{
        console.log('error!');
        console.error(error);
    });
//Created an asynchronous function to fetch lyrics API and convert data to text//
async function lyrics() {
    // Const variables to contain the fetch function, the text conversion of the data, and the data split//
    const response = await fetch('https://api.lyrics.ovh/v1/beatles/yesterday');
    const data = await response.text();
    const section = data.split('\n');
    // let variables containing the logic to manipulate DOM to creat new HTML elements//
    let sectionEl = $('.lyrics-container');
    let divEl = $('<div>').addClass('.lyrics');
    //Section appending the newly created elements to the HTML and the fetched data to the elements//
    divEl.append(section);
    sectionEl.append(divEl);
    console.log(section);
};
    