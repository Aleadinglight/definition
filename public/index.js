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
              var m_returnMessage = data.word.bold()+"\n";
              data.definitions.forEach(function(element,i){
                m_returnMessage+=(i+1)+". "+element.definition+"\n";
              });
              result.returnMessage = m_returnMessage;
          });
        }
    }
});


