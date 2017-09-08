$(() => {
    $('#addHome').removeClass('btn-danger').addClass('btn-success')
    $('h1').addClass('text-center');

    var newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    newLink.appendTo('body');  
    //opens new tab to navigate to link
    $('#zillowLink').attr( "target", "_blank" );
    console.log($('#zillowLink').attr('href'))
    // adds callback 
    $('#addHome').on('click',($event) => {
        console.log($event);
        console.log(this);
});
const removeHome = ($sevent) => {
    console.log(this);
}
    $('#homes tbody').on('click', 'tr', removeHome);
})