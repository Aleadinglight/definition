var result = new Vue({
    el:'#result',
    data: {
        message:""
    },
    methods:{
        findDef: function(){
          $.post( "/search", { name: this.message })
            .done(function( data ){

          });
        }
    }
});


