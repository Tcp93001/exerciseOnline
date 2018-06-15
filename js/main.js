$(document).ready(function () {

    revision();

    let data;

 function revision(){
    $('#restaurantsTable').DataTable( {
        ajax: {
            url: 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json',
            dataSrc: ''
        },
        columns: [
            { data: 'name' },
            { data: 'rating' },
            { data: 'contact.site', 
                    "orderable": false,
                    "render":   function(data, type, row, meta){
                        if(type === 'display'){
                            data = '<a href="' + data + '">' + data + '</a>';
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

});




