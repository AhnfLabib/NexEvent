<template>
  <div class="about-page">
    <div class="banner">
        <img src="../assets/NexEvent.png" alt="">
    </div>
    <div class="descDiv">
        <div class="description">
            <h1 class="mainTitle">About NexEvent</h1>
            <p class="paragraph">
                NexEvent is an organization dedicated to revolutionize event planning and management, offering a comprehensive suite of tools to address the diverse needs of organizers. The organization utilizes a web platform with intuitive interface, users can effortlessly create, assign, and monitor tasks, streamline financial planning with built-in budgeting tools, and optimize resource allocation for venues, equipment, and personnel. Real-time collaboration is made simple through shared dashboards, communication features, and progress tracking, ensuring seamless teamwork.            </p>
        </div>
    </div>
    <div class="contact">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitContactForm">
        <input type="text" v-model="contact.name" placeholder="Your Name" required />
        <input type="email" v-model="contact.email" placeholder="Your Email" required />
        <textarea v-model="contact.message" placeholder="Your Message" rows="4" required></textarea>
        <button @click="$emit('childMsg', 'second time' )" type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['childMsg'],
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitContactForm() {
      console.log("Contact Form Submitted:", this.contact);
      alert("Thank you for contacting us! We'll get back to you soon.");
      this.contact;
    },
  },
};
</script>

<style scoped>
/* General Page Styling */
.about-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;

  margin: 0 auto;

}

.descDiv {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    
}

/* Banner Styling */
.banner {
    text-align: center;
}


/* Description Section */
.description {
  text-align: center;
  margin-bottom: 50px;
  padding: 20px;
  max-width: 1200px;
  background-color: #f4f4f9; /* Light background for a clean look */
  border-radius: 12px;
}

.description .mainTitle {
  font-size: 42px;
  color: #1c6ed6; /* Stronger color for better visibility */
  margin-bottom: 20px;
  font-weight: 600;
}

.description .paragraph {
  font-size: 20px;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Contact Section */
.contact {
  max-width: 650px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd; /* Border for better contrast */
}

.contact h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 26px;
  color: #333;
  font-weight: 500;
}

.contact form {
  display: flex;
  flex-direction: column;
}

.contact form input,
.contact form textarea {
  width: 100%;
  padding: 12px 18px;
  margin-bottom: 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: border-color 0.3s ease-in-out;
}

.contact form input:focus,
.contact form textarea:focus {
  border-color: #1c6ed6;
  outline: none;
}

.contact form button {
  padding: 12px 20px;
  background-color: #1c6ed6;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.contact form button:hover {
  background-color: #154ba7;
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .description .mainTitle {
    font-size: 30px;
  }

  .description .paragraph {
    font-size: 18px;
  }

  .contact {
    padding: 20px;
  }

  .contact form input,
  .contact form textarea {
    font-size: 15px;
  }

  .contact form button {
    font-size: 16px;
  }
}


</style>
