<template>
  <div id="app">
    <flightSearch></flightSearch>  
  </div>
</template>
<script>
import flightSearch from "./components/flightSearch";
export default {
  name: "App",
  components: {
    flightSearch
  }
};
</script>

<style>
#app {
   font-family: "Courier New", Courier, monospace;
   color: #2c3e50;
}
@media (max-width: 786px) {
  .contentContainer, .searchHeader{
    flex-direction: column;
  }
  .filghtTiming{
    text-align-last: left;
    margin-top: 5px;
  }
  .mainContainer{
    padding:0px;
  }
  .slider{
    width:100%;
  }
}
</style>
