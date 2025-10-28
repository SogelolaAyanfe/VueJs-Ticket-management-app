<template>
  <div class="ticket-manager">
    <header class="ticket-header">
      <h2>Ticket Management</h2>
    </header>

    <div>
      <TicketForm />
    </div>

    <!-- Error Messages -->
    <div v-if="ticketsStore.isError" class="error-message">
      {{ ticketsStore.isError }}
    </div>

    <section class="ticket-list">
      <h2>All Tickets</h2>
      <div class="ticket-cards">
        <div v-if="ticketsStore.getTickets.length === 0" class="no-tickets">
          No tickets available. Create one to get started!
        </div>

        <div
          v-for="ticket in ticketsStore.getTickets"
          :key="ticket.id"
          :class="['ticket-card', ticket.status.toLowerCase()]"
        >
          <!-- Edit Mode -->
          <div v-if="editingTicket === ticket.id" class="edit-mode">
            <div class="edit-group-form">
              <label>Title</label>
              <input
                type="text"
                v-model="editTitle"
                class="edit-input"
              />
            </div>
            <div class="edit-group-form">
              <label>Status</label>
              <select v-model="editStatus" class="edit-select">
                <option value="OPEN">Open</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>
            <div class="edit-group-form">
              <label>Description</label>
              <textarea
                v-model="editDescription"
                rows="3"
                class="edit-textarea"
              />
            </div>
            <div class="ticket-actions">
              <button
                class="small-button save-button"
                @click="handleSaveEdit(ticket.id)"
              >
                Save
              </button>
              <button
                class="small-button cancel-button"
                @click="handleCancelEdit"
              >
                Cancel
              </button>
            </div>
          </div>

          <!-- View Mode -->
          <div v-else>
            <div class="ticket-header-card">
              <h4>{{ ticket.title }}</h4>
              <span :class="['status-tag', ticket.status.toLowerCase()]">
                {{ formatStatus(ticket.status) }}
              </span>
            </div>
            <p>{{ ticket.description }}</p>
            <div class="ticket-actions">
              <button
                class="small-button"
                @click="handleEdit(ticket)"
              >
                Edit
              </button>
              <button
                class="delete-button"
                @click="handleDelete(ticket.id, ticket.title)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTicketsStore } from '@/stores/ticketsStore';
import TicketForm from '@/components/TicketForm.vue';

const ticketsStore = useTicketsStore();

// Edit state
const editingTicket = ref(null);
const editTitle = ref('');
const editDescription = ref('');
const editStatus = ref('');

const handleEdit = (ticket) => {
  editingTicket.value = ticket.id;
  editTitle.value = ticket.title;
  editDescription.value = ticket.description;
  editStatus.value = ticket.status;
};

const handleSaveEdit = (ticketId) => {
  const result = ticketsStore.updateTicket(ticketId, {
    title: editTitle.value,
    description: editDescription.value,
    status: editStatus.value
  });

  if (result.success) {
    handleCancelEdit();
  }
};

const handleCancelEdit = () => {
  editingTicket.value = null;
  editTitle.value = '';
  editDescription.value = '';
  editStatus.value = '';
};

const handleDelete = (ticketId, ticketTitle) => {
  const confirmDelete = window.confirm(
    `Are you sure you want to delete the ticket: "${ticketTitle}"?`
  );
  if (confirmDelete) {
    ticketsStore.deleteTicket(ticketId);
  }
};

const formatStatus = (status) => {
  return status.replace('_', ' ').toLowerCase();
};
</script>

<style scoped>
.ticket-manager {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
}

.ticket-header {
  background: #351764;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.ticket-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 20px;
}

.ticket-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 20px;
  place-items: center;
}

.ticket-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  width: 320px;
  border: 1px solid #ddd;
  gap: 0.5rem;
}

.ticket-header-card {
  display: flex;
  justify-content: space-between;
}

.ticket-card p {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.ticket-header-card h4 {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.ticket-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.edit-mode {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.edit-group-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.edit-group-form input {
  border: 2px solid black;
  border-radius: 8px;
  height: 50px;
  width: 200px !important;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding-left: 15px;
}

.edit-group-form textarea {
  border: 2px solid black;
  border-radius: 8px;
  height: 150px;
  width: 200px !important;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding-left: 15px;
}

.delete-button {
  background: #fee2e2;
  color: #b91c1c;
  border: 1px solid;
}

.status-tag {
  padding: 4px 10px 11px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 10px;
  height: 10px;
}

.status-tag.open {
  background: #dcfce7;
  color: #166534;
}

.status-tag.in_progress {
  background: #fef9c3;
  color: #92400e;
}

.status-tag.closed {
  background: #e5e7eb;
  color: #374151;
}

@media screen and (max-width: 1160px) {
  .ticket-cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 770px) {
  .ticket-card {
    width: 250px;
  }

  .ticket-cards {
    grid-template-columns: 1fr;
  }
}

</style>
