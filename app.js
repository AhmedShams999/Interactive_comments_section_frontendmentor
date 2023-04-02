const commentText = document.querySelector('.comment_text');
const sendBtn = document.querySelector('.send_btn');
const okBtn = document.querySelector('.ok');
const commentSection = document.querySelector('.comment_section');
const addNote = document.querySelector('.add_note');
const overllays = document.querySelectorAll('.overllay')
const user = document.querySelector('.user-entry')


//localStorage.clear()

let comments = [
  {
    "id": 1,
    "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    "createdAt": "1 month ago",
    "score": 12,
    "user": {
      "image": { 
        "png": "./images/avatars/image-amyrobson.png",
        "webp": "./images/avatars/image-amyrobson.webp"
      },
      "username": "amyrobson"
    },
    "replies": []
  },
  {
    "id": 2,
    "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    "createdAt": "2 weeks ago",
    "score": 5,
    "user": {
      "image": { 
        "png": "./images/avatars/image-maxblagun.png",
        "webp": "./images/avatars/image-maxblagun.webp"
      },
      "username": "maxblagun"
    },
    "replies": [
      {
        "id": 3,
        "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        "createdAt": "1 week ago",
        "score": 4,
        "replyingTo": "maxblagun",
        "user": {
          "image": { 
            "png": "./images/avatars/image-ramsesmiron.png",
            "webp": "./images/avatars/image-ramsesmiron.webp"
          },
          "username": "ramsesmiron"
        }
      },
      {
        "id": 4,
        "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        "createdAt": "2 days ago",
        "score": 2,
        "replyingTo": "ramsesmiron",
        "user": {
          "image": { 
            "png": "./images/avatars/image-juliusomo.png",
            "webp": "./images/avatars/image-juliusomo.webp"
          },
          "username": "juliusomo"
        }
      }
    ]
  }
  
]
let userName = "";
let userPic = "";
userEntry();
load();


function view(){
  commentSection.innerHTML =""
  for(let i =0 ;i <comments.length;i++){
    const comment = document.createElement('div');
    comment.classList.add('comment');
    if(comments[i].replies.length!=0){
      if(comments[i].user.username == userName){
        comment.innerHTML = 
        `
          <div class="user-comment" id=${comments[i].id}>
            <div class="up-down-vote">
            <p class="up">+</p>
            <p class="num">${comments[i].score}</p>
            <p class="down">-</p>
          </div>
          
          <div class="user">
            <div class="info">
              <img src="${comments[i].user.image.png}" alt="user-pic">
              <p class="user-name">${comments[i].user.username}</p>
              <p class="sign">You</p>
              <p class="date">${comments[i].createdAt}</p>
              <img class="delete-icon" src="./images/icon-delete.svg" alt="reply-icon">
              <p class="delete-btn">Delete</p>
              <img class="edit-icon" src="./images/icon-edit.svg" alt="reply-icon">
              <p class="edit-btn">Edit</p>
            </div>
            <div class="text-c">
              ${comments[i].content} 
            </div>
          </div>
          
          </div>
          
          <div class="replys">
          <div class="line"></div>
          
            <div class="replys-c">
            
            ${replys(comments[i])}
            
            </div>
          
          </div>
          `

      }else{

        comment.innerHTML = 
        `
          <div class="user-comment" id=${comments[i].id}>
            <div class="up-down-vote">
            <p class="up">+</p>
            <p class="num">${comments[i].score}</p>
            <p class="down">-</p>
          </div>
          
          <div class="user">
            <div class="info">
              <img src="${comments[i].user.image.png}" alt="user-pic">
              <p class="user-name">${comments[i].user.username}</p>
              <p class="date">${comments[i].createdAt}</p>
              <img class="replay-icon" src="./images/icon-reply.svg" alt="reply-icon">
              <p class="reply-btn">Replay</p>
            </div>
            <div class="text-c">
              ${comments[i].content} 
            </div>
          </div>
          
          </div>
          
          <div class="replys">
          <div class="line"></div>
          
            <div class="replys-c">
            
            ${replys(comments[i])}
            
            </div>
          
          </div>
          `
      }
      }else{
        if(comments[i].user.username == userName){
          comment.innerHTML = 
          `
            <div class="user-comment" id=${comments[i].id}>
              <div class="up-down-vote">
              <p class="up">+</p>
              <p class="num">${comments[i].score}</p>
              <p class="down">-</p>
            </div>
            
            <div class="user">
              <div class="info">
                <img src="${comments[i].user.image.png}" alt="user-pic">
                <p class="user-name">${comments[i].user.username}</p>
                <p class="sign">You</p>
                <p class="date">${comments[i].createdAt}</p>
                <img class="delete-icon" src="./images/icon-delete.svg" alt="reply-icon">
                <p class="delete-btn">Delete</p>
                <img class="edit-icon" src="./images/icon-edit.svg" alt="reply-icon">
                <p class="edit-btn">Edit</p>
              </div>
              <div class="text-c">
                ${comments[i].content} 
              </div>
            </div>
            
            </div>
            
            <div class="replys">
            <div class="line"></div>
            
              <div class="replys-c">
              
              </div>
            
            </div>
            `}
            else{
          comment.innerHTML = 
            `
              <div class="user-comment" id=${comments[i].id}>
              <div class="up-down-vote">
              <p class="up">+</p>
              <p class="num">${comments[i].score}</p>
              <p class="down">-</p>
              </div>
              
              <div class="user">
              <div class="info">
              <img src="${comments[i].user.image.png}" alt="user-pic">
              <p class="user-name">${comments[i].user.username}</p>
              <p class="date">${comments[i].createdAt}</p>
              <img class="replay-icon" src="./images/icon-reply.svg" alt="reply-icon">
              <p class="reply-btn">Replay</p>
              </div>
              <div class="text-c">
              ${comments[i].content} 
              </div>
              </div>
              
              </div>
                
                <div class="replys">
                <div class="line"></div>
                
                <div class="replys-c">
                
                </div>
                
                </div>
              `
        }
      }
        comment.addEventListener('click',(e)=>{
          if(e.target.classList.contains('up')){
            upVote(e.target.parentElement.parentElement.id,e.target.parentElement.parentElement.classList[1])
            view();
          }
          else if(e.target.classList.contains('down')){
            downVote(e.target.parentElement.parentElement.id,e.target.parentElement.parentElement.classList[1])
            view();
          }
          else if(e.target.classList.contains('reply-btn')){
            if(e.target.parentElement.parentElement.parentElement.classList.contains('replayy')){
              showReplay(e.target.parentElement.parentElement.parentElement.getAttribute("comment-id"));
            }
            else{
              showReplay(e.target.parentElement.parentElement.parentElement.id);
            }
          }
          else if(e.target.classList.contains('edit-btn')){
            if(e.target.parentElement.parentElement.parentElement.classList.contains('replayy')){
              editComment(e.target.parentElement.parentElement.parentElement.id,'replay')
            }
            else{
              editComment(e.target.parentElement.parentElement.parentElement.id,'comment')
            }
          }
          else if(e.target.classList.contains('delete-btn')){
            if(e.target.parentElement.parentElement.parentElement.classList.contains('replayy')){
              deleteComment(e.target.parentElement.parentElement.parentElement.id,'replay')
            }
            else{
              deleteComment(e.target.parentElement.parentElement.parentElement.id,'comment')
            }
          }
        })
        commentSection.appendChild(comment);
      }
      save();
}
    
function replys(commentS){ 
  const replayC = document.createElement('div');
  replayC.classList.add('replys-c')
    for(let i =0 ;i < commentS.replies.length;i++){
      let replay= commentS.replies[i];     
      if(replay.user.username == userName){
        replayC.innerHTML += 
        `
        <div class="user-comment replayy" id=${replay.id} comment-id=${commentS.id}>
        <div class="up-down-vote">
        <p class="up">+</p>
        <p class="num">${replay.score}</p>
        <p class="down">-</p>
        </div>
        
        <div class="user">
        <div class="info">
        <img src="${replay.user.image.png}" alt="user-pic">
        <p class="user-name">${replay.user.username}</p>
        <p class="sign">You</p>
        <p class="date">${replay.createdAt}</p>
        <img class="delete-icon" src="./images/icon-delete.svg" alt="reply-icon">
        <p class="delete-btn">Delete</p>
        <img class="edit-icon" src="./images/icon-edit.svg" alt="reply-icon">
        <p class="edit-btn">Edit</p>
        </div>
        <div class="text-c">
        ${replay.content} 
        </div>
        </div>
        
        </div>
        `

      }
      else{
        replayC.innerHTML += 
        `
        <div class="user-comment replayy" id=${replay.id} comment-id=${commentS.id}>
        <div class="up-down-vote">
        <p class="up">+</p>
        <p class="num">${replay.score}</p>
        <p class="down">-</p>
        </div>
        
        <div class="user">
        <div class="info">
        <img src="${replay.user.image.png}" alt="user-pic">
        <p class="user-name">${replay.user.username}</p>
        <p class="date">${replay.createdAt}</p>
        <img class="replay-icon" src="./images/icon-reply.svg" alt="reply-icon">
        <p class="reply-btn">Replay</p>
        </div>
        <div class="text-c">
        ${replay.content} 
        </div>
        </div>
        
        </div>
        `
      }
  }
      return replayC.innerHTML;
}
function createComment(text){
  const comment = {
    "id": Math.floor((Math.random() * 100000) + 1),
    "content": text.value,
    "createdAt": "1 month ago",
    "score": 0,
    "user":{
      "image":{
        "png": userPic
      },
      "username": userName
    },
    "replies":[]
  }
  comments.push(comment);
}
function createReplay(text,index){
  const comment = {
    "id": Math.floor((Math.random() * 100000) + 1),
    "content": text,
    "createdAt": "1 month ago",
    "score": 0,
    "user":{
      "image":{
        "png": userPic
      },
      "username": userName
    }
  }

  comments[index].replies.push(comment);
}

function showReplay(id){
  const replayoverlay = overllays[2];
  replayoverlay.classList.add('show');
  replayoverlay.innerHTML = 
  `
    <div class="container">
    <textarea class="comment_text2" name="" id="" cols="30" rows="10" placeholder="Add your Replay..."></textarea>
    <button class="ok"> OK </button>
    </div>
  `
  replayoverlay.children[0].children[1].addEventListener('click',()=>{
    for(let i = 0;i<comments.length;i++){
      if(comments[i].id== id){
        createReplay(replayoverlay.children[0].children[0].value,i)
        replayoverlay.innerHTML = "";
        replayoverlay.classList.remove('show');
        view();
  
      }
    }
  })
  
}
function upVote(id,name){
  if(name ==  "replayy"){
    for(let i =0 ;i < comments.length;i++){
      for(let j =0 ;j < comments[i].replies.length;j++){
        if(comments[i].replies[j].id == id){
          comments[i].replies[j].score++
        }
      }
    }
  
  }else{

    for(let i =0 ;i < comments.length;i++){
      if(comments[i].id == id){
        comments[i].score++
      }
    }
  }
}
function downVote(id,name){
  if(name ==  "replayy"){
    for(let i =0 ;i < comments.length;i++){
      for(let j =0 ;j < comments[i].replies.length;j++){
        if(comments[i].replies[j].id == id){
          comments[i].replies[j].score--
        }
      }
    }
  
  }else{

    for(let i =0 ;i < comments.length;i++){
      if(comments[i].id == id){
        comments[i].score--
      }
    }
  }
}

function editComment(id,name){
  const editoverlay = overllays[0];
  editoverlay.classList.add('show');
  editoverlay.innerHTML = 
  `
    <div class="container">
    <textarea class="comment_text2" name="" id="" cols="30" rows="10" placeholder="whay do you want to change"></textarea>
    <button> OK </button>
    </div>
  `
  if(name == 'replay'){
    for(let i =0;i < comments.length;i++){
      for(let j =0;j<comments[i].replies.length;j++){
        if(comments[i].replies[j].id == id){
          editoverlay.children[0].children[0].value = comments[i].replies[j].content;
          editoverlay.children[0].children[1].addEventListener('click',()=>{
            comments[i].replies[j].content = editoverlay.children[0].children[0].value;
            editoverlay.classList.remove('show');
            view();
          }) 
        }
      }
    }
  } else{

    for(let i =0;i < comments.length;i++){
      if(comments[i].id == id){
        editoverlay.children[0].children[0].value = comments[i].content;
        editoverlay.children[0].children[1].addEventListener('click',()=>{
          comments[i].content = editoverlay.children[0].children[0].value;
          editoverlay.classList.remove('show');
          view();
        }) 
      }
    }
  }
    

}

function deleteComment(id,name){
  const deleteoverlay = overllays[1];
  deleteoverlay.classList.add('show');
  deleteoverlay.innerHTML = 
  `
    <div class="container">
    <p>Are You Sure You Want To Delete Your comment !!</p>
    <div>
      <button>Yes</button>
      <button>No</button>
    </div>
    </div>
  `
  if(name == 'replay'){
    for(let i =0;i < comments.length;i++){
      for(let j =0;j<comments[i].replies.length;j++){
        if(comments[i].replies[j].id == id){
        deleteoverlay.children[0].children[1].addEventListener('click',(e)=>{
          if(e.target.textContent == "Yes"){
            comments[i].replies.splice(j,1);
            deleteoverlay.classList.remove('show');
            view();
          }else{
            deleteoverlay.classList.remove('show');
            view();
          }
          })
        }
      }
    }
  } else {
    for(let i =0;i < comments.length;i++){
      if(comments[i].id == id){
      deleteoverlay.children[0].children[1].addEventListener('click',(e)=>{
        if(e.target.textContent == "Yes"){
          comments.splice(i,1);
          deleteoverlay.classList.remove('show');
          view();
        }else{
          deleteoverlay.classList.remove('show');
          view();
        }

        })
      }
    }
  }

}

function save(){
  localStorage.setItem('comments',JSON.stringify(comments));
}
function load(){
  if(JSON.parse(localStorage.getItem('comments'))!== null){
    comments = JSON.parse(localStorage.getItem('comments'))
    view();
  }else{
    view();
  }
}

function userEntry(){
  user.children[0].children[4].addEventListener('click',()=>{
    if(user.children[0].children[3].value == "" || user.children[0].children[1].files[0] == null){
      alert('please enter all your profile')
    }else{
      userPic = URL.createObjectURL(user.children[0].children[1].files[0]);
      userName =  user.children[0].children[3].value;
      addNote.classList.add('show');
      addNote.children[0].children[0].src = URL.createObjectURL(user.children[0].children[1].files[0]);
      commentSection.classList.add('show2');
      user.classList.add('hide')
      view();
    }
  })
}
sendBtn.addEventListener('click',()=>{
  createComment(commentText);
  view();
})