function formboxx1(){
    var q1= $('#name').val();
    var q2= $('#email').val();
    var q3= $('#Institute').val();
    var q4=$('#Contact').val();
    var q5=$('#Subject').val();
    $.ajax({
        url:"https://docs.google.com/forms/d/e/1FAIpQLSfAm1w1l1TmJBS5pXyHfRf8CUG3KBMS2YYkXXdr7u8fO04IqQ/formResponse",
        data:{"entry.1303223011":q1,"entry.1373153325":q2,"entry.2066957449":q3,"entry.714553918":q4,"entry.2031624875":q5},
        type:"POST",
        dataType:"xml",
        statusCode:{
            0:function(){

            },
            200:function(){

            }
        }
	});
	
}
$(document).ready(function(){
    $('#formy').submit(function(){
        formboxx1();
        return false;
    });
});

