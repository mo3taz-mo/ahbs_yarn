<template>
  <div class="offer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="post in posts" :key="post.id">
          <h2 class="text-capitalize my-2 our-offer-heading">
            {{ post.title }}
          </h2>
          <hr />
          <p>{{ post.id }}</p>
          <!-- <div class="hold-buttons">
            {{ post.completed }}
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./offer.js"></script>
<style lang="scss" scoped>
  h2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
