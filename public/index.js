var result = new Vue({
    el:'#result',
    data: {
        message:""
    },
    methods:{
        findDef: function(){
          var m=this.message
          $.post( "/search", { name: m })
            .done(function( data ){
              console.log(data);
          });
        }
    }
});


