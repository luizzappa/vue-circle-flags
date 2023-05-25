<template>
  <header class="page-header" role="banner">
    <h1 class="project-name">Vue Circle Flags</h1>
    <h2 class="project-tagline">
      A collection of 400+ circular SVG country and state flags
    </h2>
    <a href="https://github.com/luizzappa/vue-circle-flags" class="btn"
      >View on GitHub</a
    >
  </header>

  <nav>
    <label for="flag-size">Flag size:</label>
    <select name="flag-size" id="flag-size" v-model="flagSize">
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
    <label for="stroke-width">Stroke width:</label>
    <select name="stroke-width" id="stroke-width" v-model="strokeWidth">
      <option value="5">5</option>
      <option value="20">20</option>
      <option value="40">40</option>
      <option value="0">None</option>
    </select>
    <label for="stroke-color">Stroke color:</label>
    <input
      type="text"
      id="stroke-color"
      name="stroke-color"
      v-model="strokeColor"
    />
  </nav>

  <article>
    <div class="flag-detail" v-for="code of countryCodes" :key="code">
      <CircleFlags
        :size="flagSize"
        :strokeColor="strokeColor"
        :strokeWidth="parseInt(strokeWidth)"
        :country="code"
      />
      <span
        >{{ countryList[code].name }} (<span class="code">{{ code }}</span
        >)</span
      >
    </div>
  </article>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import CircleFlags from '@/components/CircleFlags.vue';
  import { countryCodes, countryList } from '@/defs/country';

  const strokeWidth = ref<string>('5'),
    strokeColor = ref<string>('#CCC'),
    flagSize = ref<'small' | 'medium' | 'large'>('medium');
</script>

<style scoped>
  .page-header {
    padding: 1rem 0;
    color: #fff;
    text-align: center;
    background-color: #159957;
    background-image: linear-gradient(120deg, #155799, #159957);
  }
  .project-name {
    font-size: 3.25rem;
    margin-top: 0;
    margin-bottom: 0.1rem;
  }
  .project-tagline {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    font-weight: normal;
    opacity: 0.7;
  }
  .btn {
    padding: 0.75rem 1rem;
    display: inline-block;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.3rem;
    text-decoration: none;
    transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  }
  .btn:hover {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
  nav {
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  nav label {
    padding-left: 1rem;
    padding-right: 2px;
  }
  nav input {
    width: 60px;
  }
  article {
    margin: 1rem auto;
    display: grid;
    row-gap: 60px;
    column-gap: 10px;
    max-width: 1100px;
    grid-template-columns: repeat(auto-fill, minmax(max(200px, 100%/6), 1fr));
  }
  .flag-detail {
    display: inline-flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    text-align: center;
  }
  .flag-detail .code {
    padding: 2px 4px;
    font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 0.9rem;
    color: #567482;
    background-color: #f3f6fa;
    border-radius: 0.3rem;
  }
</style>

<style>
  #app,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #606c71;
  }
</style>
