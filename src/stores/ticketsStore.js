import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTicketsStore = defineStore('tickets', () => {
  // State
  const tickets = ref(JSON.parse(localStorage.getItem('tickets')) || []);
  const error = ref('');
  const loading = ref(false);

  // Getters
  const getTickets = computed(() => tickets.value);
  const isError = computed(() => error.value);
  const isLoading = computed(() => loading.value);

  // Actions
  const createTicket = (ticketData) => {
    try {
      loading.value = true;
      const newTicket = {
        id: Date.now(), // Simple ID generation
        ...ticketData,
        createdAt: new Date().toISOString()
      };

      tickets.value.push(newTicket);
      localStorage.setItem('tickets', JSON.stringify(tickets.value));
      error.value = '';

      return { success: true, data: newTicket };
    } catch (err) {
      error.value = 'Failed to create ticket';
      return { success: false };
    } finally {
      loading.value = false;
    }
  };

  const updateTicket = (ticketId, updates) => {
    try {
      loading.value = true;
      const ticketIndex = tickets.value.findIndex(ticket => ticket.id === ticketId);

      if (ticketIndex !== -1) {
        tickets.value[ticketIndex] = {
          ...tickets.value[ticketIndex],
          ...updates,
          updatedAt: new Date().toISOString()
        };
        localStorage.setItem('tickets', JSON.stringify(tickets.value));
        error.value = '';
        return { success: true };
      } else {
        error.value = 'Ticket not found';
        return { success: false };
      }
    } catch (err) {
      error.value = 'Failed to update ticket';
      return { success: false };
    } finally {
      loading.value = false;
    }
  };

  const deleteTicket = (ticketId) => {
    try {
      loading.value = true;
      const ticketIndex = tickets.value.findIndex(ticket => ticket.id === ticketId);

      if (ticketIndex !== -1) {
        tickets.value.splice(ticketIndex, 1);
        localStorage.setItem('tickets', JSON.stringify(tickets.value));
        error.value = '';
        return { success: true };
      } else {
        error.value = 'Ticket not found';
        return { success: false };
      }
    } catch (err) {
      error.value = 'Failed to delete ticket';
      return { success: false };
    } finally {
      loading.value = false;
    }
  };

  const getTicketById = (ticketId) => {
    return tickets.value.find(ticket => ticket.id === ticketId);
  };

  return {
    // State
    tickets,
    error,
    loading,

    // Getters
    getTickets,
    isError,
    isLoading,

    // Actions
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketById
  };
});
