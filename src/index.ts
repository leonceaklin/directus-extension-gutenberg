import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'gutenberg',
	name: 'Gutenberg',
	icon: 'box',
	description: 'Gutenberg Editor for Directus',
	component: InterfaceComponent,
	options: null,
	types: ['string'],
});
