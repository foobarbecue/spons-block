var remove_sug_posts = function(){
    
    // Select suggested posts
    var sug_posts = document.evaluate("//div[div[span[text()[contains(.,'Suggested Post')]]]]", document, null, XPathResult.ANY_TYPE, null );

    // Remove suggested posts
    var sug_post = sug_posts.iterateNext();
    while(sug_post){
        sug_post.remove();
        sug_post = sug_posts.iterateNext();
    }
}

// Add event listener based on http://stackoverflow.com/a/27363569/616730
// Triggers suggested post removal on when loading more timeline items
var origOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function() {
    this.addEventListener('load', remove_sug_posts);
    origOpen.apply(this, arguments);
}
