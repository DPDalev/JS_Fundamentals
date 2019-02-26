function extractLinks(text) {


    let links = [];
    let regex = /www\.[a-z0-9\-]+[.a-z]+\b/;

    for (let sentence of text) {

        let match = null;
        let index = 0;

        while (match = regex.exec(sentence)) {
            console.log(match[0]);
        }
    }
}


extractLinks('Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko');
extractLinks('How do you plan on achieving that? How? How can you even think of that?', 'how');
