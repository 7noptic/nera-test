<template>
  <span
    v-if="name"
    class="svg-icon"
    v-html="require(`~/assets/icons/${name}.svg?raw`)"
  />
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      default: null
    },
    hasFill: {
      type: Boolean,
      default: false
    },
    fill: {
      type: String,
      default: ''
    },
    growByHeight: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    }
  },
  mounted () {
    if (this.$el.firstElementChild.nodeName === 'svg') {
      const svgElement = this.$el.firstElementChild;
      // use `viewBox` attribute to get the svg's inherent width and height
      const viewBox = svgElement.getAttribute('viewBox')
        .split(' ')
        .map(n => Number(n));
      const widthToHeight = (viewBox[2] / viewBox[3]).toFixed(2);
      if (this.hasFill) {
        // recursively remove all fill attribute of element and its nested children
        this.recursivelyRemoveFill(svgElement);
      }
      if (this.fill) {
        // recursively remove all fill attribute of element and its nested children
        this.recursivelyFilled(svgElement);
      }
      // set width and height relative to font size
      if (this.width && this.height) {
        svgElement.setAttribute('width', `${this.width}`);
        svgElement.setAttribute('height', `${this.height}`);
      } else if (this.width) {
        svgElement.setAttribute('width', `${this.width}`);
      } else if (this.height) {
        svgElement.setAttribute('height', `${this.height}`);
      } else if (this.growByHeight) {
        // if growByHeight is true, height set to 1em else width set to 1em and remaining is calculated based on widthToHeight ratio
        svgElement.setAttribute('height', '1px');
        svgElement.setAttribute('width', `${widthToHeight}`);
      } else {
        svgElement.setAttribute('width', '1px');
        svgElement.setAttribute('height', `${1 / widthToHeight}`);
      }
      svgElement.classList.add('svg-class');
    }
  },
  methods: {
    recursivelyRemoveFill (el) {
      if (!el) {
        return;
      }
      el.removeAttribute('fill');
      [].forEach.call(el.children, child => this.recursivelyRemoveFill(child));
    },
    recursivelyFilled (el) {
      if (!el) {
        return;
      }
      el.setAttribute('fill', this.fill);
      [].forEach.call(el.children, child => this.recursivelyFilled(child));
    }
  }
};
</script>


<style lang="scss" scoped>
.svg-icon {
  display: inline-flex;
  //margin-top: -3px; // -$text-field-append-prepend-margin; // компенсация от vuetify стилей
}
</style>
