<template>
    <div class="mainContainer">
    <div class="mainHeader "><span>Flight Search Engine</span></div>
    <div class="contentContainer"> 
    <sidebar></sidebar>
    <searchList></searchList>
    </div>
    </div>
</template>
<script>
import Sidebar from "./sidebar";
import SearchList from "./searchList";
export default {
  name: "flightSearch",
  props: {
    msg: String
  },
  components: {
    sidebar: Sidebar,
    searchList: SearchList
  },
  data() {
    return {};
  },
  created: function() {}
};
</script>

<style>
.cont {
  border: 1px solid #ccc;
  padding: 15px;
}
.mainContainer {
  padding: 1em;
  min-height: calc(100%-20);
}
.mainHeader {
  font-weight: 300;
  font-size: 20px;
  color: gray;
  border:1px solid;
  border-color: #e1e1e1 #e1e1e1  #ffff #e1e1e1;
  padding:15px;
}
.contentContainer {
  display: flex;
   align-content: space-between;
   border: 1px solid #e1e1e1;

}
</style>
