$(document).ready(function () {

    revision();
    // getData();

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
            { data: 'contact.site' },
            { data: 'contact.email' },
            { data: 'contact.phone' },
            { data: 'address.street' },
            { data: 'address.city' },
            { data: 'address.state' }
        ]
    } 
);
 }
    
    function getData() {
    
    $.getJSON('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json', function (data) {

        let color = data[0].address.location;
        
        console.log("este es el dao json", JSON.stringify(color));
         



                $('#restaurantsTable').DataTable( {
                    ajax: {
                        url: 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json',
                        dataSrc: data
                    },

                    data: data,
                    columns: [
                        { data: 'id' },
                        { data: 'name' },
                        { data: 'rating'},
                        { data: 'address.city'}
                    ]
                } 
            );
        }
    )
    };






    // $('#get-data').click(function () {
        
    //   var showData = $('#tablewrapper');

    //   let content;

    //   $.getJSON('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json', function (data) {
    //     console.log(data);
  
    //     var items = data.map(function (item) {
          
    //       content = 
    //               "<tr>" +
    //                     "<td>" + item.id + "</td>" +
    //                     "<td>"+ item. name + "</td>" +
    //                     "<td>" +
    //                         "<table>" +
    //                             "<thead>" +
    //                                 "<tr>" +
    //                                     "<th>Website</th>" +
    //                                     "<th>Email</th>" +
    //                                     "<th>Phone</th>" +
    //                                 "</tr>" +
    //                             "</thead>" +
    //                             "<tbody>" +
    //                                 "<tr>" +
    //                                     "<td>"+ item.contact.site +"</td>" +
    //                                     "<td>" + item.contact.email + "</td>" +
    //                                     "<td>" + item.contact.phone  + "</td>" +
    //                                 "</tr>" +
    //                             "</tbody>" +
    //                         "</table>" +
    //                     "</td>" +
    //                     "<td>" +
    //                         "<table>" +
    //                             "<thead>" +
    //                                 "<tr>" +
    //                                     "<th>Street</th>" +
    //                                     "<th>City</th>" +
    //                                     "<th>State</th>" +
    //                                     "<th>Location</th>" +
    //                                 "</tr>" +
    //                             "</thead>" +
    //                             "<tbody>" +
    //                                 "<tr>" +
    //                                     "<td>" + item.address.street + "</td>" +
    //                                     "<td>" + item.address.city + "</td>" +
    //                                     "<td>" + item.address.state + "</td>" +
    //                                     "<td>" + item.address.location + "</td>" +
    //                                 "</tr>" +
    //                             "</tbody>" +
    //                         "</table>" +
    //                     "</td>" +
    //                     "<td>"+ item.rating + "<i class=\"far fa-star\"></i></td>" +
    //                 "</tr>";
          
    //       showData.append(content);

    //       return;
    //     });
        
    //     console.log("Datos en el array: ", items);

    //   });
  
    // });
  });




