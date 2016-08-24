var sug_posts = document.evaluate("//div[div[span[text()[contains(.,'Suggested Post')]]]]", document, null, XPathResult.ANY_TYPE, null );
var sug_post = sug_posts.iterateNext();
while(sug_post){
    sug_post.remove();
    sug_post = sug_posts.iterateNext();
}