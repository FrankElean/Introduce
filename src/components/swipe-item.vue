<template>
	  <div class="music-swipe-item">
			  <slot></slot>
	  </div>
</template>

<script>
		export default {
				name: 'mc-swipe-item',
				
				ready() {
						this.$dispatch('swipeItemCreated', this);
				},
				
				detached() {
						this.$dispatch('swipeItemDestroyed', this);
				},
				
				destroyed() {
						this.$dispatch('swipeItemDestroyed', this);
				}
		};
</script>