# ⚡ TaskFlow — Enterprise-Grade Task Management Engineering

TaskFlow is a high-performance, single-page client application (SPA) architected with **React** and styled via an atomic integration of **Bootstrap 5**. Designed around a unidirectional data flow paradigm, TaskFlow offers a streamlined, highly responsive interface for complex objective tracking, real-time aggregate statistics processing, and situational priority isolation.

---

## 🗺️ System Architecture & Data Flow

TaskFlow relies on a **centralized state management strategy** housed within the master dashboard layer. State cascades downward via read-only props, while state modifications bubble upward through declarative action dispatches.

```text
               +---------------------------------------+
               |              App.jsx                  |
               +---------------------------------------+
                                   |
                                   v
               +---------------------------------------+
               |            Dashboard.jsx              | <--- [State: tasks, currentPage]
               +---------------------------------------+
                                   |
      +----------------------------+----------------------------+
      |                            |                            |
      v                            v                            v
+--------------+           +--------------+             +---------------+
| Sidebar.jsx  |           |StatsCards.jsx|             |  TaskForm.jsx |
+--------------+           +--------------+             +---------------+
(Sets Active Page)        (Computes Analytics)         (Dispatches Add Actions)
      |
      +----------------------------+
                                   | (Conditional Page Swap)
                                   v
             +-------------------------------------------+
             |  MyDay.jsx / Important.jsx / Completed.jsx |
             +-------------------------------------------+
                                   |
                                   v
             +-------------------------------------------+
             |               TaskList.jsx                |
             +-------------------------------------------+
                                   |
                                   v
             +-------------------------------------------+
             |               FilterBar.jsx               |
             +-------------------------------------------+