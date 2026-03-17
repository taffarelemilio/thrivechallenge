Practical Exercise – Dashboard Tabs with React Query

🧩 Goal

Build a small Next.js page that contains:

- 2 tabs
  - Characters
  - Locations
- Each tab fetches data from the Rick & Morty API  
  https://rickandmortyapi.com/documentation
- Display a simple styled card per item (no pagination required)
- Avoid unnecessary refetching when switching tabs

This exercise is meant to simulate a small feature inside a dashboard-style application.

⸻

⚙️ Technical Stack

Please use:

- Next.js (pages router)
- TypeScript
- styled-components
- Axios
- @tanstack/react-query (v5)

⸻

📄 Functional Requirements

1. Tabs
   - Two tabs: Characters and Locations
   - Switching tabs should:
     - Not reload the page
     - Not refetch data if it was already loaded

Keep the UI simple — we are not evaluating design skills.

⸻

2. Characters Tab

Fetch from:

```
GET https://rickandmortyapi.com/api/character
```

Display a simple card per character showing:

- Image
- Name
- Status
- Species

⸻

3. Locations Tab

Fetch from:

```
GET https://rickandmortyapi.com/api/location
```

Display a simple card per location showing:

- Name
- Type

⸻

🎨 Styling

- Use styled-components
- Keep styles simple
- No need for responsiveness, animations, or advanced layout

⸻

🧠 What We’re Evaluating

This is not about perfection or pixel accuracy. We would like to understand your thinking and how you work.

You don’t need to overengineer the solution.

Keep it clean, readable, and maintainable.

⸻

🚫 What Is Not Required

- No pagination
- No filtering
- No authentication

⸻

📦 Deliverables

Please provide: 1. A Git repository (public or shared access) 2. A short section in this README explaining: 3. Any tradeoffs you made 4. What you would improve if this were production code

⸻

🤖 AI Usage Disclosure

You are allowed to use AI tools.

If you used any AI tool during development, please specify in this README:

- Which tool you used (e.g., ChatGPT, Copilot, etc.)
- For what purpose (e.g., scaffolding, debugging, typing interfaces, etc.)
- Why you chose to use it

We are not judging AI usage negatively.
We want transparency and to understand how you integrate tools into your workflow.

⸻

⏱ Time Expectation

Please don’t spend excessive time polishing details.
We are more interested in how you approach the problem than in a perfect final result.

⸻

💬 Notes

If any requirement is unclear, make reasonable assumptions and document them in this README.

Clarity of thinking is more important than completeness.

---

- Created next-app@latest with custom options for app router
- Added styled-components axios @tanstack/react-query
- Default config for styled-components
- Created a ReactQueryProvider to wrap the app with QueryClientProvider
- Created lib & services folders for API client and gets
- Created types for characters and locations
- Created hooks for fetching characters and locations using react-query, added enabled prop for fetching only when the respective tab is active and added staleTime & gcTime to avoid unnecessary refetching
- Created reusable Cards component for character and location
- ChatGPT used for ServerStyleSheet default config on \_document.tsx and for typing interfaces based on API response examples
- Copilot autocomplete used for some boilerplate code and for some style definitions
- Added remote origin on next.config.js to allow < Image /> next/image optimization for the API images with a custom < ImageWrapper /> for preventing layout shift
- Added UI feedback for loading, error and a 'no characters/locations found' state
- Added some hover and active style on the tabs

- - Fixed a typo on this readme where '3. Locations Tab' was duplicated. (Lines 43 - 48)

- - For production code I would improve accessibility & SEO, skeletons for loading states, theaming, better responsiveness and image fallbacks in case a remote image fails. I would also add some unit and integration tests. Observability tools and error tracking services. I would use .env variables for the API base URL.
