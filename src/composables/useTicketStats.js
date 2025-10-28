import { computed } from 'vue';
import { useTicketsStore } from '@/stores/ticketsStore';

export const useTicketStats = () => {
  const ticketsStore = useTicketsStore();

  const totalTickets = computed(() => ticketsStore.getTickets.length);

  const openTickets = computed(() =>
    ticketsStore.getTickets.filter(ticket => ticket.status === 'OPEN').length
  );

  const resolvedTickets = computed(() =>
    ticketsStore.getTickets.filter(ticket => ticket.status === 'CLOSED').length
  );

  const inProgressTickets = computed(() =>
    ticketsStore.getTickets.filter(ticket => ticket.status === 'IN_PROGRESS').length
  );

  const isError = computed(() => ticketsStore.isError);

  return {
    totalTickets,
    openTickets,
    resolvedTickets,
    inProgressTickets,
    isError
  };
};
