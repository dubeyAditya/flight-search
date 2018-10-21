<template>
    <div id="tabs" class="container">
    <div class="tabs">
        <a @click="tabChange(1)" :class="[ activetab === 1 ? 'active' : '' ]">One Way</a>
        <a @click="tabChange(2)" :class="[ activetab === 2 ? 'active' : '' ]">Return</a>
    </div>

    <div class="content">
            <div v-if="activetab === 1" class="tabcontent">
                <formOneWay :journyType="'oneway'"></formOneWay>
            </div>
            <div v-if="activetab === 2" class="tabcontent">
                <formTwoWay :journyType="'twoway'"></formTwoWay>
            </div>
    </div>
    </div>
</template>

<script>
import formOneWay from "./formOneWay";
import formTwoWay from "./formTwoWay";
export default {
  data() {
    return {
      activetab: 1,
      slide: "slide"
    };
  },
  components: {
    formOneWay,
    formTwoWay
  },
  methods: {
    tabChange(value) {
      this.activetab = value;
      this.$store.state.submitted = false;
      if (value === 1) {
        this.$store.state.isReturn = false;
      }
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  margin: 10px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #888;
}

.tabs {
  overflow: hidden;
  margin-left: 20px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}

.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

.tabcontent {
  border: 1px solid #ccc;
}

/* Form  */
.form {
  border: 1px solid #f2f2f2;
  padding: 5px;
  min-height: 300px;
}
.form-input {
  border: 1px solid #f2f2f2;
  min-height: 20px;
  border-radius: 8px;
  padding: 5px 10px 5px 10px;
  margin: 10px 5px 10px 5px;
}
.form-input-date {
  border: 1px solid #f2f2f2;
  min-height: 20px;
  border-radius: 8px;
  padding: 5px 10px 5px 10px;
  margin: 5px 5px 10px 5px;
}
.form-button {
  margin-left: 10px;
  padding: 5px 10px 5px 10px;
  border: 1px solid gray;
  border-radius: 4px;
}
.form-input-date > input,
.form-input > input,
.form-input > select {
  border: none;
  outline: none;
  width: 100%;
}
.form-input > input:focus {
  border-color: blueviolet;
}
.labelText {
  margin: 5px 5px 0px 10px;
}
.disabled {
  cursor: not-allowed !important;
}
/* Form  */
</style>
