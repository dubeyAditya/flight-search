import Vue from 'vue';
import App from './App.vue';
import store from './store';
import mixins from './mixins/mixin';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
	vuetify,
	store,
	mixins: [mixins],
	render: h => h(App)
}).$mount('#app');
