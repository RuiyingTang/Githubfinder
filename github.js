class Github {
  constructor() {
    this.client_id = "e2e611316d656861c8cf";
    this.client_secret = "2ce5ebc04bcc1d705205141b8ea68672b218f1f6";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.client_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos
    };
  }
}
