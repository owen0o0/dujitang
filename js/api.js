jQuery(function($){ 
  $(document).ready(function(){
    getonlist();
  })
  $(document).on('click', '.load_jt',function(event) {
    event.preventDefault();
    getonlist();
  });
  function getonlist(){
    var text = $("#jttext");
    $.ajax({
      type: 'get',
      url: './api/',
      dataType: 'json',
      jsonp: 'callback',
      success:function(res) {
        if (res.status === 1) {
          var content = res.data['content'].content;
          document.title = content + " | 一为忆";
          text.html(content);
        } else {
          gethelist();
        }
      },
      error: function(error) {
        var content = '网络错误！';
        document.title = content + " | 一为忆";
        text.html(content);
      }
    })
  }
});