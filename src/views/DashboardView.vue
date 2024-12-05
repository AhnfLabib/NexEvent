<template>
    <h1 class="mainTitle">Dashboard</h1>
    <div class="dashB">
        <TaskList />
        <WorkerList />
        <ExpenseList />
        <EquipmentList />
    </div>


</template>

<script>
import SignInForm from '@/components/SignInForm.vue';
import TaskList from '@/components/lists/TaskList.vue';
import WorkerList from '@/components/lists/WorkerList.vue';
import ExpenseList from '@/components/lists/ExpenseList.vue';
import EquipmentList from '@/components/lists/EquipmentList.vue';



export default {

  components: {
      TaskList,
      WorkerList,
      ExpenseList,
      EquipmentList,
      SignInForm

  },


}

</script>

<style scoped>
.dashB {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  padding: 20px;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

/* List Item Containers */
.dashB > * {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

/* Hover Effect for Lists */
.dashB > *:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

/* List Headers */
.dashB > * h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
}

/* List Content */
.dashB > * ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dashB > * ul li {
  font-size: 16px;
  color: #555;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.dashB > * ul li:last-child {
  margin-bottom: 0;
}

/* Icon or Indicator (optional) */
.dashB > * ul li::before {
  content: "•";
  color: #007bff;
  margin-right: 8px;
  font-size: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashB {
    grid-template-columns: 1fr;
  }

  .dashB > * {
    padding: 10px;
  }
}
</style>

