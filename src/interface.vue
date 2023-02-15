<template>
	<input :value="value" @input="handleChange($event.target.value)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		value: {
			type: String,
			default: null,
		},
	},
	emits: ['input'],
	setup(props, { emit }) {
		return { handleChange };

		function handleChange(value: string): void {
			emit('input', value);
		}
	},
});
</script>

<script lang="scss">
	// Wordpress Styles
	@import '@wordpress/components/build-style/style.css';
	@import '@wordpress/block-editor/build-style/style.css';
	@import '@wordpress/block-library/build-style/style.css';
	@import '@wordpress/block-library/build-style/editor.css';
	@import '@wordpress/block-library/build-style/theme.css';
	@import '@wordpress/format-library/build-style/style.css';
</script>