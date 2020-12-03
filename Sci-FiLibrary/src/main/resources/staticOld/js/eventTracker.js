window.addEventListener('load', function(){
console.log('Script loaded')
init();
aggregate();
});



function init() {
document.novelForm.submit.addEventListener('click', function(evt){
    evt.preventDefault();
    let keyword = document.novelForm.search.value;
    if (keyword !== null) {
        let dataDiv = document.getElementById('novelData');
        dataDiv.textContent = '';
        getNovelsByKeyword(keyword);
    }

});
document.newNovelForm.addNovelButton.addEventListener('click', function(evt){
    
    postNewNovel(evt);
  });

document.deleteNovelForm.deleteNovelButton.addEventListener('click', function(e){
    e.preventDefault();
    let novelId = document.deleteNovelForm.novelId.value; 


    deleteNovel(novelId);

});  
document.updateNovelForm.updateNovelButton.addEventListener('click', function(e){
    e.preventDefault();
    let novelId = document.updateNovelForm.id.value; 


    updateNovel(novelId);

});
 

// TODO: setup event listeners for buttons etc
let xhr = new XMLHttpRequest();
xhr.open('GET', 'api/novels');
xhr.onreadystatechange = function() {
    

    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let novelsJSON = xhr.responseText;
            let novels = JSON.parse(novelsJSON);
            displayNovels(novels);

            

        }
    } else {
        console.error('novels are not able to be displayed');
        displayError('novels are not able to be displayed');
    }
};
xhr.send();
}

function displayError(msg) {
    let div = document.getElementById('novelData');
    div.textContent = msg;
}

function displayNovels(novels) {

    
   
    var dataDiv = document.getElementById('novelData');
    dataDiv.textContent = '';
    var newTable = document.createElement('table');
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    var novelIdHead = document.createElement('th');
    var titleHead = document.createElement('th');
    var authorHead = document.createElement('th');
    var yearPublishedHead = document.createElement('th');
    var numberOfChaptersHead = document.createElement('th');
    // var descriptionHead = document.createElement('th');
    var subGenreHead = document.createElement('th');
    var coverImageUrlHead = document.createElement('th');
    var editHead = document.createElement('th');

    novelIdHead.textContent = 'Novel ID';
    titleHead.textContent = 'Title';
    authorHead.textContent = 'Author';
    yearPublishedHead.textContent = 'Year Published';
    numberOfChaptersHead.textContent = 'Number of Chapters';
    // descriptionHead.textContent = 'Description';
    subGenreHead.textContent = 'Sub Genre';
    coverImageUrlHead.textContent = 'Cover image';
    editHead.textContent = 'Edit/Delete novel';

    headRow.appendChild(novelIdHead);
    headRow.appendChild(titleHead);
    headRow.appendChild(authorHead);
    headRow.appendChild(yearPublishedHead);
    headRow.appendChild(numberOfChaptersHead);
    // headRow.appendChild(descriptionHead);
    headRow.appendChild(subGenreHead);
    headRow.appendChild(coverImageUrlHead);
    headRow.appendChild(editHead);

    tableHead.appendChild(headRow);
    newTable.appendChild(tableHead);
    

    let tableBody = document.createElement('tbody');
    
    for (let i = 0; i < novels.length; i++) {
            
            let newRow = document.createElement('tr');
            
            let novelId = document.createElement('td');
            let titleName = document.createElement('td');
            let authorName = document.createElement('td');
            let year = document.createElement('td');
            let chapters = document.createElement('td');
            // let description = document.createElement('td');
            let subGenre = document.createElement('td');
            let coverImage = document.createElement('td');
            let editButton = document.createElement('button');
            let deleteButton = document.createElement('button');
            novelId.textContent = novels[i].id;
            titleName.textContent = novels[i].title;
            authorName.textContent = novels[i].author;
            year.textContent = novels[i].yearPublished;
            chapters.textContent = novels[i].numberOfChapters;
            // description.textContent = novels[i].description;
            subGenre.textContent = novels[i].subGenre;
            coverImage.textContent = ' ';
            editButton.textContent = 'Edit';
            editButton.name = 'editButton';
            editButton.id = novels[i].id;
            deleteButton.textContent = 'Delete';
            deleteButton.name = 'deleteButton';
            deleteButton.id = novels[i].id;
            newRow.appendChild(novelId);
            newRow.appendChild(titleName);
            newRow.appendChild(authorName);
            newRow.appendChild(year);
            newRow.appendChild(chapters);
            // newRow.appendChild(description);
            newRow.appendChild(subGenre);
            newRow.appendChild(coverImage);
            newRow.appendChild(editButton);
            newRow.appendChild(deleteButton);
            tableBody.appendChild(newRow);
            newTable.appendChild(tableBody);
            editButton.addEventListener('click', function(e) {
                let novelId = editButton.id;
                getNovelById(novelId);
        });
    } dataDiv.appendChild(newTable);
    var totalNumChp = 0;
    var avgNumChp;
    var counter = 0;
for (let i = 0; i < novels.length; i++) {
    totalNumChp += novels[i].numberOfChapters;
    counter++;
    
    
}
avgNumChp = totalNumChp / counter;
let aggDiv = document.getElementById('aggregateDataDiv');
aggDiv.textContent = 'Average number of chapters per novel' + ' '  + Math.floor(avgNumChp);



   



}

function getNovelById(novelId) {
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/novels/' + novelId);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let novelJSON = xhr.responseText;
                let novel = JSON.parse(novelJSON);
                editNovel(novel);
            }
        } 
        // else {
        //     console.error('novels are not able to be displayed');
        //     displayError('cannot find novels by that id number');
        // }
    };
    xhr.send();
    };



    function editNovel(novel) {
        let editDiv = document.getElementById('editNovelDiv');
        let editform = document.createElement('form');

        for(var p in novel) {
            let input = document.createElement('input');
            input.type = 'text';
            input.name = p + '';
            editform.appendChild(input);
            // console.log(novel[p]);
           
        }
        
        editDiv.append(editForm);
        
    // console.log(novel);
    // console.log('*************');


    // let dataDiv = document.getElementById('novelData');
    // let ul = document.createElement('ul');
    // dataDiv.textContent = '';

    // dataDiv.appendChild(h3);
  
    // dataDiv.appendChild(ul);



};



function getNovelsByKeyword(keyword) {
   
    let xhr = new XMLHttpRequest();
xhr.open('GET', 'api/novels/search/' + keyword);
xhr.onreadystatechange = function() {
    

    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let novelsJSON = xhr.responseText;
            let novels = JSON.parse(novelsJSON);
            displayNovelsByKeyword(novels);
            


        }
    } else {
        console.error('novels are not able to be displayed');
        displayError('cannot find novels by that keyword');
    }
};
xhr.send();
}

function displayNovelsByKeyword(novels) {
     let dataDiv = document.getElementById('novelData');
    dataDiv.textContent = '';
    

    let keyWordDiv = document.getElementById('novelsByKeyword');
    keyWordDiv.textContent = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Novels found from search';
    keyWordDiv.appendChild(h3);
    let ul = document.createElement('ul');

    for (let i = 0; i < novels.length; i++) {
        let li = document.createElement('li');
        li.textContent = "'" + novels[i].title + "'" + ' ' + 'written by '+ novels[i].author;
        ul.appendChild(li);
    }
    keyWordDiv.appendChild(ul);
}
{/* <input type="text" name="title" placeholder="Film Title"> <br>
<input type="text" name="author" placeholder="Author"> <br>
<input type="number" name="yearPublished" placeholder="Year Published"> <br>
<input type="text" name="numberOfChapter" placeholder="Number of chapters"> <br>
<input type="text" name="description" placeholder="Description"> <br>
<input type="text" name="subGenre" placeholder="Sub-Genre"> <br>
<input type="text" name="coverImageUrl" placeholder="Cover image url"> <br> */}


function postNewNovel(e) {
    let form = document.newNovelForm;
    let newNovel = {
        title: form.title.value,
        author: form.author.value,
        yearPublished : form.yearPublished.value,
        numberOfChapters : form.numberOfChapters.value,
        description : form.description.value,
        subGenre : form.subGenre.value,
        coverImageUrl : form.coverImageUrl.value
    };
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/novels');
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 201 || xhr.status === 200) {
                let savedNovel = JSON.parse(xhr.responseText);
                alert('novel has been added');
                init();

                
        }
        else {
          console.error('Error creating film, status=' + xhr.status);
          console.error(xhr.responseText);
          displayError('Invalid film data.');
        }
      }
    };
    xhr.setRequestHeader('Content-type','application/json')
    xhr.send(JSON.stringify(newNovel));


}

function deleteNovel(e) {
    console.log(e);
    
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'api/novels/delete/' + e);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 204) {
                
                alert('novel has been deleted');
                init();

                
        }
        else {
          console.error('Error deleting film, status=' + xhr.status);
          console.error(xhr.responseText);
          displayError('Failed to delete Novel');
        }
      }
    };

xhr.send(null);

};

// function updateNovel(novelId) {
    
//     let form = document.updateNovelForm;
//     let updatedNovel = {
//         // id: form.id.value,
//         title: form.title.value,
//         author: form.author.value,
//         yearPublished : form.yearPublished.value,
//         numberOfChapters : form.numberOfChapters.value,
//         description : form.description.value,
//         subGenre : form.subGenre.value,
//         coverImageUrl : form.coverImageUrl.value
//     };
//     let xhr = new XMLHttpRequest();
//     xhr.open('PUT', 'api/novels/' + novelId);
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let novel = JSON.parse(xhr.responseText);
                
//                 console.log(novel);
//                 init();

                
//         }
//         else {
//           console.error('Error updating film, status=' + xhr.status);
//           console.error(xhr.responseText);
//           displayError('in else statement.');
//         }
//       }
//     };
//     xhr.setRequestHeader('Content-type','application/json')
//     xhr.send(JSON.stringify(updatedNovel));

// };

// function aggregate() {
// var novels;
// let aggDiv = document.getElementById('aggregateDataDiv');
//     let xhr = new XMLHttpRequest();
// xhr.open('GET', 'api/novels');
// xhr.onreadystatechange = function() {
    

//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             let novelsJSON = xhr.responseText;
//             novels = JSON.parse(novelsJSON);
            
            
            
//         }
//     } else {
//         console.error('novels are not able to be displayed');
//         displayError('novels are not able to be displayed');
//     }
// };
// xhr.send();
// console.log(novels);
// let avgNumberOfChp; 
// for (let i = 0; i < novels.length; i++) {
//     console.log(novels[i].numberOfChapters);
//     // aggDiv.appendChild()
// }

// }




// xhr.open('Put', 'api/pangolins/'+pangoId);
// xhr.send(JSON.stringify(uopdatedPango));

// xhr.open('DELETE', )