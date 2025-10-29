<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h2>Dashboard</h2>
      <button id="logout-button" @click="handleLogout" class="logout-btn">Logout</button>
    </header>

    <main class="dashboard-main">
      <button id="logout-button" @click="handleLogout" class="logout-second-button">Logout</button>

      <section class="welcome-section">
        <h2>Welcome back, Admin!</h2>
        <p>Here's an overview of your ticket activity today.</p>
      </section>

      <h2>Ticket Statistics</h2>

      <div v-if="isError" class="error-message">
        {{ isError }}
      </div>

      <section class="stats-container">
        <div class="stat-card open">
          <h3>{{ openTickets }}</h3>
          <p>Open Tickets</p>
        </div>
        <div class="stat-card in-progress">
          <h3>{{ inProgressTickets }}</h3>
          <p>In Progress</p>
        </div>
        <div class="stat-card closed">
          <h3>{{ resolvedTickets }}</h3>
          <p>Resolved</p>
        </div>
        <div class="stat-card total">
          <h3>{{ totalTickets }}</h3>
          <p>Total Tickets</p>
        </div>
      </section>

      <section class="actions-container">
        <div class="action-card">
          <h4>Manage Tickets</h4>
          <p>View, edit, or delete existing tickets.</p>
          <button>
            <router-link to="/tickets" style="color: white; text-decoration: none">
              Open Manager
            </router-link>
          </button>
        </div>
      </section>
    </main>
  </div>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { useTicketStats } from '@/composables/useTicketStats';
import Footer from '@/components/Footer.vue';

const router = useRouter();
const authStore = useAuthStore();
const {
  totalTickets,
  openTickets,
  resolvedTickets,
  inProgressTickets,
  isError
} = useTicketStats();

// Redirect if not authorized (only on mount)
onMounted(() => {
  if (!authStore.isAuthorized) {
    router.push('/auth/login');
  }
});

const handleLogout = () => {
  authStore.logout();

  authStore.success = '';
  router.push('/');
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f8fafc;
  color: #1f1f1f;
  max-width: 1440px;
}

.dashboard-header {
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

.logout-btn {
  background: white;
  color: #351764;
  border: none;
  padding: 10px 18px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: #ecebff;
  color: #1f1f1f;
}

.dashboard-main {
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
}

.welcome-section {
  text-align: center;
  align-items: flex-start;
  margin-bottom: 40px;
}

.welcome-section h2 {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.welcome-section p {
  color: #555;
}

.stats-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 50px;
}

.stat-card {
  background: white;
  border-radius: 16px;
  width: 200px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card p {
  color: #555;
}

.stat-card.open {
  border: 3px solid #28c76f;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.stat-card.open h3 {
  color: #28c76f;
}

.stat-card.in-progress {
  border: 3px solid #ffb300;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.stat-card.in-progress h3 {
  color: #ffb300;
}

.stat-card.closed {
  border: 3px solid #9ca3af;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.stat-card.closed h3 {
  color: #9ca3af;
}

.stat-card.total {
  border: 3px solid #5b4bff;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.stat-card.total h3 {
  color: #5b4bff;
}

.actions-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.action-card {
  background: white;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 10px 20px 30px 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.action-card:hover {
  transform: translateY(-4px);
}

.action-card h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.action-card p {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 15px;
}

.logout-second-button {
  display: none;
  color: white;
  background: #351764;
  border: none;
  padding: 10px 18px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-second-button:hover {
  color: #ecebff;
  background: #1f1f1f;
}

@media (max-width: 768px) {
  .stat-card {
    padding: 10px;
  }

  .action-card {
    width: 100%;
  }

  .dashboard-header {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .logout-btn {
    display: none;
  }

  .logout-second-button {
    display: block;
  }
}
</style>
