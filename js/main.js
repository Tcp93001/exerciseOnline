$(document).ready(function () {

    revision();

    var table = $('#restaurantsTable').DataTable();
     
    $('#restaurantsTable tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        alert( 'You clicked on '+data[0]+'\'s row' );
    } );
    
});


function revision(){
    $('#restaurantsTable').DataTable( {
        ajax: {
            url: 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json',
            dataSrc: ''
        },

        responsive: true,
        
            columns: [
                { data: 'name' },
                { data: 'rating' },
                { data: 'contact.site', 
                        "orderable": false,
                        "render":   function(data, type, row, meta){
                            if(type === 'display'){
                                data = cambios(data);
                            }
                            return data;
                        }  
                    },
                { data: 'contact.email', "orderable": false  },
                { data: 'contact.phone', "orderable": false  },
                { data: 'address.street', "orderable": false  },
                { data: 'address.city' },
                { data: 'address.state' }
            ]
        } 
    );
}

function cambios(info){

    let temporal = info.toString();

    let expresion = ':\/\/';
    
    let resultado = temporal.replace(expresion, '%3A%2F%2');

    

    let cadena = '<a href="' + info + '">' + info + '</a><iframe class="justify-content-center" src="https://www.facebook.com/plugins/like.php?href=' + resultado + '&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width="450" height="80" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>';

    
    return cadena;
    
}
