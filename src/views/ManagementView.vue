<template>
    <h1 class="mainTitle">Management</h1>
    <div class="formEdit2">
        <div class="formEdit">
            <EquipmentForm />
            <ExpenseForm />
            <TaskForm />
            <WorkerForm />
        </div>
    </div>
    
    

    
</template>

<script>

import SignInForm from '@/components/SignInForm.vue';
import EquipmentForm from '@/components/forms/EquipmentForm.vue';
import ExpenseForm from '@/components/forms/ExpenseForm.vue';
import TaskForm from '@/components/forms/TaskForm.vue';
import WorkerForm from '@/components/forms/WorkerForm.vue';


export default {

    components: {
        SignInForm,
        EquipmentForm,
        TaskForm,
        WorkerForm,
        ExpenseForm
    },

}

</script>


<style scoped>

.formEdit2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
}

.formEdit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid */
  gap: 20px;
  width: 100%;
  max-width: 1200px; /* Restrict maximum width */
}

.formEdit > div {
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.formEdit > div:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .formEdit {
    grid-template-columns: 1fr; /* Stacks forms on smaller screens */
  }
}



</style>