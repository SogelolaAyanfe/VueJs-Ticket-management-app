<template>
  <div class="landing">
    <header class="hero" role="banner" aria-label="Hero">
      <div class="hero-content">
        <h1 class="hero-title">Ticketed.</h1>
        <p class="hero-subtitle">
          Your #1 Ticket Management Solution. Streamline your ticket workflow: track, manage, and
          resolve issues effortlessly.
        </p>

        <div class="hero-buttons">
          <router-link to="/auth/login" class="btn primary" aria-label="Login"> Login </router-link>
          <router-link to="/auth/signup" class="btn secondary" aria-label="Get Started">
            Get Started
          </router-link>
        </div>
      </div>

      <div class="decor-circle" aria-hidden="true" />

      <div class="hero-wave-container">
          <svg class="hero-wave" preserveAspectRatio="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" stroke="none" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <svg class="hero-wave-two" preserveAspectRatio="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#351764" fill-opacity="1" stroke="none" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <svg class="hero-wave-three" preserveAspectRatio="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" stroke="none" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    </header>

    <main>
      <section class="features" aria-label="Features">
        <div class="feature">
          <span class="icon" aria-hidden="true">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/carbon-copy/100/ticket.png"
              alt="ticket"
            />
          </span>
          <h3>Easy Ticket Creation</h3>
          <p>Create and manage tickets instantly with an intuitive interface.</p>
        </div>

        <div class="feature">
          <span class="icon" aria-hidden="true">
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/dotty/80/marketing.png"
              alt="marketing"
            />
          </span>
          <h3>Dashboard Insights</h3>
          <p>Monitor your ticket progress and get real-time summaries.</p>
        </div>

        <div class="feature">
          <span class="icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                d="M 25 3 C 18.364481 3 13 8.3644809 13 15 L 13 20 L 9 20 C 7.3545455 20 6 21.354545 6 23 L 6 47 C 6 48.645455 7.3545455 50 9 50 L 41 50 C 42.645455 50 44 48.645455 44 47 L 44 23 C 44 21.354545 42.645455 20 41 20 L 37 20 L 37 15 C 37 8.3644809 31.635519 3 25 3 z M 25 5 C 30.564481 5 35 9.4355191 35 15 L 35 20 L 15 20 L 15 15 C 15 9.4355191 19.435519 5 25 5 z M 9 22 L 13.832031 22 A 1.0001 1.0001 0 0 0 14.158203 22 L 35.832031 22 A 1.0001 1.0001 0 0 0 36.158203 22 L 41 22 C 41.554545 22 42 22.445455 42 23 L 42 47 C 42 47.554545 41.554545 48 41 48 L 9 48 C 8.4454545 48 8 47.554545 8 47 L 8 23 C 8 22.445455 8.4454545 22 9 22 z M 25 30 C 23.3 30 22 31.3 22 33 C 22 33.9 22.4 34.699219 23 35.199219 L 23 38 C 23 39.1 23.9 40 25 40 C 26.1 40 27 39.1 27 38 L 27 35.199219 C 27.6 34.699219 28 33.9 28 33 C 28 31.3 26.7 30 25 30 z"
              ></path>
            </svg>
          </span>
          <h3>Secure Authentication</h3>
          <p>Simulated secure login using localStorage session management.</p>
        </div>
      </section>
    </main>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>

<style scoped>.landing {
  display: flex;
  width: 100%;
  flex-direction: column;
  background: linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%);
}

.hero {
  position: relative;
  background: #351764;
  color: white;
  padding: 120px 20px 180px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-title {
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.95;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.decor-circle {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  top: 50px;
  right: 10%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  z-index: 5;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.decor-circle::before {
  content: "";
  position: absolute;
  width: 150px;
  height: 150px;
  background: rgba(255, 200, 100, 0.3);
  border-radius: 50%;
  top: -100px;
  left: -150px;
  filter: blur(40px);
}

.hero-wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5;
}

.hero-wave{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  bottom: -1px;
  animation: waveMove 8s ease-in-out infinite;
  transform-origin: center bottom;
}

.hero-wave-two{
  display: none;
   position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  z-index: 5;
  bottom: -1px;
  animation: waveMove 2s ease-in-out infinite;
  transform-origin: center bottom;
}

 .hero-wave-three{
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  bottom: -1px;
  animation: waveMove 4s ease-in-out infinite;
  transform-origin: center bottom;
}



@keyframes waveMove {
  0% {
    transform: translateX(0) scaleX(1);
  }
  33% {
    transform: translateX(-1.5%) scaleX(1.01);
  }
  66% {
    transform: translateX(1.5%) scaleX(1.01);
  }
  100% {
    transform: translateX(0) scaleX(1);
  }
}


.btn {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn.primary {
  background: white;
  color: #1a202c;
}

.btn.primary:hover {
  background: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn.primary:focus {
  outline: 3px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}

.btn.secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn.secondary:focus {
  outline: 3px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  position: relative;
  padding: 20px;
}

.feature {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  position: relative;
  overflow: hidden;
}

.feature:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: #1a202c;
}

.feature .icon {
  font-size: 3.5rem;
  display: block;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.feature h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a202c;
  position: relative;
  z-index: 1;
}

.feature p {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 20px 160px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .decor-circle {
    width: 200px;
    height: 200px;
    top: 30px;
    right: 5%;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  main {
    padding: 60px 20px;
  }

  .btn {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }

  .btn.primary,
  .btn.secondary {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 80px 15px 140px;
    height: 67vh;
  }

  .hero-wave {
    height: 30%;

  }

  .hero-wave-two, .hero-wave-three{
    display: block;
  }

@keyframes float {
  0%,
  100% {
    transform: translateY(80px);
  }
  50% {
    transform: translateY(-20px);
  }
}

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    gap: 0.8rem;
  }

  .btn {
    width: 100%;
    padding: 1rem;
  }

  .decor-circle {
    width: 150px;
    height: 150px;
    top: 20px;
    right: 10px;
  }

  .feature {
    padding: 2rem;
  }

  .feature .icon {
    font-size: 3rem;
  }

  .feature h3 {
    font-size: 1.3rem;
  }

  main {
    padding: 40px 15px;
  }
}

</style>
