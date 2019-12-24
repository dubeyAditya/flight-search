<template>
	<v-app>
		<v-app-bar app color="primary accent-4" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Flight Search Engine</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-menu left bottom>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item v-for="n in 5" :key="n" @click="() => {}">
						<v-list-item-title>Option {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list-item>
				<v-list-item-avatar>
					<v-img src=""></v-img>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title>Aditya Dubey</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense>
				<v-list-item v-for="item in items" :key="item.title" :to="item.path" link>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-content>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			drawer: false,
			items: [
				{ title: 'Home', icon: 'mdi-home', path: '/' },
				{ title: 'About', icon: 'mdi-question_answer', path: '/about' }
			]
		};
	},
	mounted() {
		console.log(this);
	}
};
</script>
