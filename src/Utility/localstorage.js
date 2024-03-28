const getStoredBookApplication =() => {
    const storedBookApplication = localStorage.getItem('book-application');
    if(storedBookApplication) {
        return JSON.parse(storedBookApplication);
    }
    return [];
}


const saveBookApplication = id =>{
    const storedBookApplication = getStoredBookApplication();
    const exists = storedBookApplication.find(bookId => bookId === id);
    if(!exists){
        storedBookApplication.push(id);
        localStorage.setItem('book-application', JSON.stringify(storedBookApplication))
    }

}

export{getStoredBookApplication, saveBookApplication}