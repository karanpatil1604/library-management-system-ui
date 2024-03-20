<script setup>
import { ref } from 'vue'
const isMiniSidebar = ref(false)
const sidebarItems = ref([
  { id: 1, name: 'Inbox', icon: '📥' },
  { id: 2, name: 'Drafts', icon: '📝' },
  { id: 3, name: 'Sent', icon: '📤' },
  { id: 4, name: 'Spam', icon: '🚫' },
  { id: 5, name: 'Trash', icon: '🗑️' }
])
const activeItem = ref(1)
function toggleSidebar() {
  isMiniSidebar.value = !isMiniSidebar.value
}
</script>

<template>
  <div :class="{ sidebar: true, 'min-sidebar': isMiniSidebar }">
    <div class="hamburger" @click="toggleSidebar">&#9776;</div>
    <div class="sidebar-header">
      <h2>Gmail</h2>
    </div>
    <ul class="sidebar-nav">
      <li
        v-for="item in sidebarItems"
        :key="item.id"
        :class="{ active: activeItem === item.id }"
        @click="changeActiveItem(item.id)"
      >
        <span v-if="!isMiniSidebar">{{ item.name }}</span>
        <span v-else>{{ item.icon }}</span>
      </li>
    </ul>
  </div>

  <div style="margin-left: 250px; padding: 20px">
    <!-- Main content here -->
    <h1>Welcome to your Inbox</h1>
    <p>This is where all your emails will appear.</p>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #f0f0f0;
  overflow-y: auto;
  transition: width 0.3s;
}

.min-sidebar {
  width: 80px;
}

.sidebar-header {
  padding: 15px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sidebar-nav li:hover {
  background-color: #e5e5e5;
}

.sidebar-nav li.active {
  background-color: #ddd;
}

.hamburger {
  display: block;
  position: fixed;
  top: 15px;
  left: 15px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .sidebar {
    width: 80px;
  }

  .sidebar.min-sidebar {
    width: 80px;
  }
}
</style>
