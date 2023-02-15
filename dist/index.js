import { defineInterface } from '@directus/extensions-sdk';
import { defineComponent, openBlock, createElementBlock } from 'vue';

var script = defineComponent({
  props: {
    value: {
      type: String,
      default: null
    }
  },
  emits: ["input"],
  setup(props, { emit }) {
    return { handleChange };
    function handleChange(value) {
      emit("input", value);
    }
  }
});

const _hoisted_1 = ["value"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", {
    value: _ctx.value,
    onInput: _cache[0] || (_cache[0] = $event => (_ctx.handleChange($event.target.value)))
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1))
}

script.render = render;
script.__file = "src/interface.vue";

var index = defineInterface({
  id: "gutenberg",
  name: "Gutenberg",
  icon: "box",
  description: "Gutenberg Editor for Directus",
  component: script,
  options: null,
  types: ["string"]
});

export { index as default };
