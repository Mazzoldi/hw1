function search(event){
    soggetto = event.currentTarget.querySelector("span").textContent;
    window.location.href = "show_news.php?q="+soggetto;
}

favourite_teams = document.querySelectorAll(".favourites .list div li");
for (let i = 0; i < favourite_teams.length; i++){
    favourite_teams[i].addEventListener('click', search);
}