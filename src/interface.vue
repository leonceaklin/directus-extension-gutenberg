<template>
	<IsolatedBlockEditor
		@onSaveContent="handleChange"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { applyReactInVue } from 'veaury'
import IsolatedBlockEditor from '@automattic/isolated-block-editor';


export default defineComponent({
	props: {
		value: {
			type: String,
			default: null,
		},
	},
	components: {
		isolatedBlockEditor: applyReactInVue(IsolatedBlockEditor)
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

<style lang="scss">
// Wordpress Styles
@import '@automattic/isolated-block-editor/build-browser/core.css';
</style>