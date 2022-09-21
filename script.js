let afterUrl = ""
let later = ""

setInterval(() => {
    if (window.location.href.split('=')[0] == "https://www.youtube.com/watch?v") {
        let url = "https://www.yout-ube.com/watch?v="+window.location.href.split('=')[1]
        if (url != afterUrl) {
            afterUrl = url
            window.open(url)
            window.location.href = "https://www.youtube.com";
        }
    }
    else {
        if (later != window.location.href) {
            later = window.location.href
        }
    }
}, 500)

