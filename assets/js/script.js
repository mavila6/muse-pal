//Created an asynchronous function to fetch lyrics API and convert data to text//
async function lyrics() {
    // Const variables to contain the fetch function, the text conversion of the data, and the data split//
    const response = await fetch('https://api.lyrics.ovh/v1/beatles/yesterday');
    const data = await response.json();
    // let variables containing the logic to manipulate DOM to creat new HTML elements//
    let sectionEl = $('.lyrics-container');
    let divEl = $('<div>').addClass('.lyrics');
    //Section appending the newly created elements to the HTML and the fetched data to the elements//
    console.log(data);
    divEl.append(data.lyrics);
    sectionEl.append(divEl);
};

//called lyrics() function and used .catch to log any errors that may occur in the console//
lyrics()
    .catch(error =>{
        console.log('error!');
        console.error(error);
    });
