<template>
    <div class="movie">
        <h2 class="titleName">{{ name }}</h2>
        <h2 class="paragraph">{{ description }}</h2>
        <h2 class="paragraph">Status: {{ status }}</h2>
    </div>
  
</template>

<script>

export default {
    props:['name', 'description', 'status'],
}

</script>

<style scoped>
.movie {
  display: block;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 15px auto;
  transition: transform 0.3s, box-shadow 0.3s;
}

.movie:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.titleName {
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
}

.paragraph {
  font-size: 16px;
  color: #555;
  margin: 5px 0;
}

.paragraph:last-child {
  margin-bottom: 0;
  font-weight: bold;
  color: #007bff; /* Highlight for status */
}
</style>
