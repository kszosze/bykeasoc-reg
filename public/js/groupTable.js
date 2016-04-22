$(document).ready(function() {
    var table = $('#participants').DataTable({
          "columnDefs": [
              { "visible": true, "targets": 3 }
          ],
          "order": [[ 3, 'asc' ]],
          "ordering" : false,
          "displayLength": 25,
          "drawCallback": function ( settings ) {
              var api = this.api();
              var rows = api.rows( {page:'current'} ).nodes();
              var last=null;
          }
      });

      // Order by the grouping
      $('#participants tbody').on( 'click', 'tr.group', function () {
          var currentOrder = table.order()[0];
          if ( currentOrder[0] === 3 && currentOrder[1] === 'asc' ) {
              table.order( [ 3, 'desc' ] ).draw();
          }
          else {
              table.order( [ 3, 'asc' ] ).draw();
          }
      } );
  } );
