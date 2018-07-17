var result = new Vue({
    el:'#result',
    data: {
        message:""
    },
    methods:{
        findDef: function(){
          $.get( "/search", { name: this.message })
            .done(function( data ){
              console.log(data);
          });
        }
    }
});


