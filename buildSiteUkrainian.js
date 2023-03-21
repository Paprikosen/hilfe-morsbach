import { posts } from '/content.js';

   const topics = document.getElementById('topics')
   let blogPost = ""

   console.log(posts)

   function makePostUkrainian(allPosts) {
        for (let i = 0; i < allPosts.length; i ++) {
        blogPost += `
        <div class="collapsible_box">
        <button type="button" class="collapsible"><i class="arrow right"></i><p>${allPosts[i].topicUkrainian}</p></button>
        <div class="content">
        `
        if (allPosts[i].textUkrainian) {
            blogPost += `
            <p class="text ukrainian"
            data-german='${allPosts[i].textGerman}'
            data-ukrainian='${allPosts[i].textUkrainian}'
            >${allPosts[i].textUkrainian}</p>
            `
        }
        if (allPosts[i].subtopics) {
            for (let subtopic of allPosts[i].subtopics) {
                blogPost += `
                <button type="button" class="collapsible toggle"><i class="arrow dropdown right"></i>${subtopic.topicUkrainian}</button>
                    <div class="content padding">
                        <p class="text ukrainian" 
                        data-german='<span>${allPosts[i].topicGerman} -> ${subtopic.topicGerman}</span><br><br>${subtopic.textGerman}'
                        data-ukrainian='${subtopic.textUkrainian}'>
                        ${subtopic.textUkrainian}
                        </p>
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

    topics.innerHTML += makePostUkrainian(posts)


   