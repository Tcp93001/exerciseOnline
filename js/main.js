$(document).ready(function () {

    revision();
    
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
                                data = '<a href="' + data + '" data-site="' + data + '" onclick="setModal(this)">' + data + '</a>';
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

}


// '<iframe class="justify-content-center" src="https://www.facebook.com/plugins/like.php?href=' + resultado + '&width=450&layout=standard&action=like&size=small&show_faces=true&share=true&height=80&appId" width="450" height="80" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>';