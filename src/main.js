import Vue from 'vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import mixins from './mixins/mixin';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	vuetify,
	store,
	router,
	mixins: [mixins],
	render: h => h(App)
}).$mount('#app');
