0
function getData() {
    $.ajax({
        url:'http://localhost:8080/user', //API
        method:'GET',//GET,POST,PUT,DELETE,get,put,post,delete
        success:function(response){
        console.log(response);
        let html=" ";
        response.forEach(x => {
            html += `<li>${x.name} - ${x.education }<button type="button onclick">DeleteUser(${x.id})">close</button><button type ="button onclick=updateUser()">reset</button><li>`;
        });
        $('#content').html(html);
    },
    error: function(err) {
        console.log('err');
        alret('something went wrong.please try again later');
        }
    });
}

function saveUser()
{
    const name = $('#name').val();
    const email= $('#email').val();
    const mobile =$('#mobile').val();

    const x ={
        name:name,email:email,mobile:mobile
    };
    $.ajax({

        url:'http://localhost:8080/user', //API
        method:'POST',//GET,POST,PUT,DELETE,get,put,post,delete
        contenttype:"application/json",
        data:JSON.stringify(x),
        success:function(){
        getData();
        $('#name').val();
        $('#email').val();
        $('#mobile').val();
        },
        fail:function(err){
            console.log(err);
        }
     });
}
function updateUser(){
    let name = $('#name').val('');
    let email =$('#email').val('');
    let education=$('mobile').val('');
    const AK={name:name,email:email,mobile:mobile,id};
    $.ajax({
        url:'http://localhost:8080/user',
        method:'put'
        contentType:"application/JSON",
        data:JSON.stringify(AK);
        success:function(){
            response.findIndex((x)=>
            return x.id==id;
        })
        $('#name').val('x.name');
        $('#email').val('x.email');
        $('#mobile').val('x.mobile');
        getData();
    },
    fail.function(err){
        console.log(err);
    }
function deleteUser(id){
    $.ajax({
        url:http://localhost:8080/Test_User?id=${id},
        method:'delete',
        success:function(){
            getData();
        }
        fail:function(){
            console.log(err);
        }
    })
}
getData();