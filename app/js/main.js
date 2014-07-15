$(function() {
    $("#clearbtn").click(function() {
        $( ".sentence" ).empty();
    });
    $("#playbtn").click(function () {
        jQuery.each( $( ".sentence audio" ), function( i, val ) {
            setTimeout(function(){
                val.play();
            }, i * 1000);
        });
    });

    //TODO: Use angular
    service.list(function(response){
        var cellsView = '';
        $.each(response.hits.hits[0]._source.cells, function( rowIndex, cellRows) {
            cellsView += '<div class="row row'+rowIndex+'">';
            $.each(cellRows, function(columnIndex, cell){
                cellsView +=
                    '<div class="cell draggable column'+columnIndex+'">'+
                        //TODO: SCAPE
                        '<span>'+cell.name+'</span>'+
                        '<audio src="' + cell.sound + '" />'+
                        '<img src="' + cell.image + '" />'+
                    '</div>';
            });
            cellsView += '</div>';
        });
        jQuery(cellsView).appendTo('#talkboard');
        $(".cell").click(function () {
            $( ".sentence" ).append( $( this ).clone() );
        });
    },errorHandler);
});

function errorHandler(errorResponse){
    alert("error"+errorResponse);
}