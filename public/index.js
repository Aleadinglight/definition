var result = new Vue({
    el:'#result',
    data: {
        message:"",
        returnMessage:"",
        returnWord:"",
        isDisabled:false,
        show:false
    },
    methods:{
        findDef: function(){
            result.isDisabled = true;
            result.show=false;
            $.get( "/search", { name: this.message })
                .done(function( data ){
                console.log(data);
                result.returnWord=data.word.charAt(0).toUpperCase()+data.word.slice(1);
                var m_returnMessage =" \n";
                data.definitions.forEach(function(element,i){
                    m_returnMessage+=(i+1)+". "+element.definition+"\n";
                });
                result.returnMessage = m_returnMessage;
                result.isDisabled = false;
                result.show=true;
            });
        }
    }
});


