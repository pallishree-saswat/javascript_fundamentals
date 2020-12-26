//init github

const github = new Github

//init ui

const ui = new UI

//searc inputt

const searchUser = document.getElementById('searchUser');

//search input event listner

searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not found'){
                //show alert
                ui.showAlert('user not found','alert alert-danger')
            }else{
                //show profile
                ui.showProfile(data.profile)
                //show repos
                ui.showRepos(data.repos)
            }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
})