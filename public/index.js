const Foo = { template: '<div>foo</div>' }
const routes = [
  { path: '/foo', component: Foo }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

var result = new Vue({
    el:'#result',
    data: {
        message:""
    },
    methods:{
        findDef: function(){
        }
    }
});


