import { posts } from '/content.js';

   const topics = document.getElementById('topics')
   let blogPost = ""

   console.log(posts)

   function makePostGerman(allPosts) {
        for (let i = 0; i < allPosts.length; i ++) {
        blogPost += `
        <div class="collapsible_box">
        <button type="button" class="collapsible"><i class="arrow right"></i><p>${allPosts[i].topicGerman}</p></button>
        <div class="content">
        `
        if (allPosts[i].textGerman) {
            blogPost += `
            <div class="text german" id='topic-${i}'
            >
            ${allPosts[i].textGerman}
            </div>
            `
        }
        if (allPosts[i].subtopics) {
            for (let j = 0; j < allPosts[i].subtopics.length; j++) {
                blogPost += `
                <button type="button" class="collapsible toggle"><i class="arrow dropdown right"></i>${allPosts[i].subtopics[j].topicGerman}</button>
                <div class="content">
                <div class="padding text german secondLayer" id='topic-${i}-${j}'>
                        ${allPosts[i].subtopics[j].textGerman}
                </div>`

                if (allPosts[i].subtopics[j].subtopics) {
                    for (let k = 0; k < allPosts[i].subtopics[j].subtopics.length; k++) {
                        blogPost += `
                    <button type="button" class="collapsible toggle thirdLayer"><i class="arrow dropdown right"></i>${allPosts[i].subtopics[j].subtopics[k].topicGerman}</button>
                    <div class="content padding text german thirdLayer" id='topic-${i}-${j}-${k}'>
                        ${allPosts[i].subtopics[j].subtopics[k].textGerman}
                        </div>`
                    }
                }
                blogPost += `    
                    </div>
                `
            }
        }
        

        blogPost += `
            </div>
        </div>
        `
    }
        return blogPost
   }

    topics.innerHTML += makePostGerman(posts)


   