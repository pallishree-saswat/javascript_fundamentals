class Github {
    constructor () {
        this.clientId = '';
        this.clientSecret = '';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}$sort=${this.repos_sort}
        &client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json()

        const repo = await repoResponse.json()

        return{
            profile,
            repo
        }
    }
}