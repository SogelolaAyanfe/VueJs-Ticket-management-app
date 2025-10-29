<template>
  <div class="ticket-form">
    <section class="form-header">
      <button type="submit" class="go-back">
        <router-link to="/dashboard">←</router-link>
      </button>
      <h2>Create Ticket</h2>

      <form class="form-flex" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter ticket title"
            v-model="title"
            required
          />
        </div>

        <div class="form-group">
          <label for="status">Status</label>
          <select
            id="status"
            v-model="status"
            required
          >
            <option value="">Select status</option>
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>

        <div class="form-group full">
          <label for="description">Description</label>
          <textarea
            id="description"
            placeholder="Enter ticket details"
            rows="4"
            v-model="description"
            required
          ></textarea>
        </div>

        <div v-if="ticketsStore.isError" class="error-message">
          {{ ticketsStore.isError }}
        </div>

        <button type="submit" class="button-submit" :disabled="ticketsStore.isLoading">
          {{ ticketsStore.isLoading ? 'Creating...' : 'Create Ticket' }}
        </button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTicketsStore } from '@/stores/ticketsStore';

const title = ref('');
const description = ref('');
const status = ref('OPEN');
const ticketsStore = useTicketsStore();

const handleSubmit = () => {
  if (!title.value.trim() || !description.value.trim()) {
    alert('Please fill in all required fields');
    return;
  }

  const result = ticketsStore.createTicket({
    title: title.value,
    description: description.value,
    status: status.value
  });

  if (result.success) {
    // Clear form after successful creation
    title.value = '';
    description.value = '';
    status.value = 'OPEN';
    alert('Ticket created successfully!');
  }
};
</script>

<style>
.go-back {
  background: #351764;
  border: none;
  width: 100px;
  padding: 10px 18px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.go-back:hover {
  color: #ecebff;
  background: #1f1f1f;
}

.form-header a {
  text-decoration: none;
  color: white;
}

.ticket-form {
  max-width: 1440px;
  background: white;
  padding: 2rem;
}

.form-header {
  gap: 10px;
  display: flex;
  flex-direction: column;
}

.form-flex {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  max-width: 1440px;
}

.form-group input {
  border: 2px solid black;
  border-radius: 8px;
  height: 50px;
  width: 600px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  padding-left: 15px;
}
.form-group input::placeholder {
  color: black;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}

.form-group.full textarea {
  border: 2px solid black;
  border-radius: 8px;
  height: 200px;
  width: 600px;
  resize: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  padding-left: 15px;
  padding-top: 10px;
}

textarea::placeholder {
  color: black;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}

.form-group.full {
  width: 100%;
}

label {
  font-weight: 600;
  margin-bottom: 5px;
}

select {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

button {
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px 20px 5px 20px;
  text-decoration: none;
  color: white;
  background-color: black;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 200px;
  white-space: normal;
  font-family: 'Montserrat', sans-serif;
}

button:hover {
  background: #333;
  border-color: #333;
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.button-submit {
  align-self: flex-start;
  color: white;
  padding: 8px 16px;
}

.button-submit:hover {
  background: #333;
}

@media screen and (max-width: 770px) {
  .form-flex {
    flex-direction: column;
  }

  .form-group {
    max-width: 500px;
  }

  .form-group input,
  .form-group.full textarea {
    width: 80%;
  }
}
</style>
