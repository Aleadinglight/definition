var result = new Vue({
    el:'#result',
    data: {
        message:"",
        returnMessage:""
    },
    methods:{
        findDef: function(){
          $.get( "/search", { name: this.message })
            .done(function( data ){
              console.log(data);
              console.log(JSON.stringify(data));
              this.returnMessage = JSON.stringify(data);
          });
        }
    }
});


