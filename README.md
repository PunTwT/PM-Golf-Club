# PM Golf Club — Developer Guide

## First Time Setup
```bash
git clone <repo-url>
cd PM-Golf-Club
```

---

## Setup Environment Variables
The project uses a `.env` file to store sensitive config (DB password, port, etc.) that is **never committed to GitHub**.

An `.env.example` file is provided as a template:
```bash
# Copy the example file
cp .env.example .env        # Mac/Linux
copy .env.example .env      # Windows
```

Then open `.env` and fill in your actual values:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=pm_golf_club
```
> Never share or commit your `.env` file — it's already in `.gitignore`

---

## Database Setup

The project includes SQL files to create and populate the database automatically.

### 1. Open MySQL Workbench and connect to your local server

### 2. Run the schema file first (creates tables)
- Go to **File → Open SQL Script**
- Select `db/schema.sql`
- Click the **⚡ lightning bolt** button to run it

### 3. Run the seed file second (adds sample data)
- Go to **File → Open SQL Script**
- Select `db/seed.sql`
- Click the **⚡ lightning bolt** button to run it

### 4. Verify it worked
Run this in Workbench to confirm:
```sql
SHOW DATABASES;
USE pm_golf_club;
SHOW TABLES;
```

> Always run `schema.sql` before `seed.sql` — schema creates the tables, seed fills them with data

---

## Project Structure Explained
```
backend/
├── config/         # Database connection setup
├── controllers/    # Handle request & response logic
├── middleware/     # Functions that run between request and controller
├── models/         # Database queries (SQL lives here)
└── routes/         # URL path definitions
```

**config/** — Connects your app to the database using `.env` values. You usually never touch this after setup.

**models/** — Contains the actual SQL queries. For example `getProducts()` runs `SELECT * FROM product`.

**controllers/** — Receives the HTTP request, calls the model, and sends back the response. It's the bridge between routes and models.

**routes/** — Defines which URL + method maps to which controller. For example `GET /api/products` → `getProducts` controller.

**middleware/** — Runs before the controller. Common uses are checking if a user is logged in (auth) or validating request data.
```
Request → Route → Middleware → Controller → Model → Database
                                         ↑
                                    Response sent back here
```

---

## Starting Work Each Day

### 1. Go to project root
```bash
cd path/to/PM-Golf-Club
```

### 2. Switch to dev and pull latest changes
```bash
git checkout dev
git pull origin dev
```

### 3. Create a new branch for your work
```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
```
feature/navbar        → new feature
fix/card-height       → bug fix
refactor/products     → restructuring
style/footer          → CSS only changes
```

### 4. Start frontend
```bash
cd frontend
npm run dev
```

### 5. Start backend (open a new terminal)
```bash
cd backend
npm start
```
> Make sure your `.env` is filled in before starting the backend

You should see:
```
Server listening at PORT: 5000
```

---

## Testing Backend with Postman

### Setup base URL
Create an environment in Postman and set:
```
baseUrl = http://localhost:5000
```
Then use `{{baseUrl}}/api/products` in your requests instead of hardcoding the URL.

### GET all products
```
Method : GET
URL    : {{baseUrl}}/api/products
```

### GET with filters (Params tab)
```
Method : GET
URL    : {{baseUrl}}/api/products
Params : brand=Scotty Cameron
         minPrice=3000
         maxPrice=10000
```

### GET product by ID
```
Method : GET
URL    : {{baseUrl}}/api/products/1
```

### POST add a product (Body → raw → JSON)
```
Method : POST
URL    : {{baseUrl}}/api/products
```
```json
{
  "name": "Scotty Cameron Detour",
  "description": "Premium milled blade putter, 34 inch",
  "code": "PT002",
  "brand": "Scotty Cameron",
  "price": 4900.00,
  "hand": "RH",
  "loft": 3.5,
  "flex": null,
  "quantity": 3,
  "category_id": 3
}
```

Expected responses:
```
200 OK   → request succeeded
201      → item created successfully
404      → item not found
500      → server error (check terminal for details)
```

> If you get `ECONNREFUSED` — your backend server isn't running  
> If you get `500` — check the terminal where you ran `node server.js` for the error message

---

## During Work

### Check which branch you are on
```bash
git branch
```

### Check what files you changed
```bash
git status
```

---

## Pushing Your Work

### 1. Go to project root
```bash
cd C:\Users\ppupunn\PM-Golf-Club
```

### 2. Check your current branch
```bash
git branch
```

Make sure you are on your feature branch, NOT on `dev` or `main`:
```
* feature/your-feature-name   ← should see this
  dev
  main
```

### 3. Stage your changes
```bash
git add .
```

### 4. Commit with a message
```bash
git commit -m "feat: describe what you did"
```

Commit message prefixes:
```
feat:      added a new feature
fix:       fixed a bug
refactor:  restructured code without changing behavior
style:     CSS or formatting changes
chore:     config, dependencies, cleanup
docs:      documentation changes
```

### 5. Push your branch to GitHub
```bash
git push origin feature/your-feature-name
```

---

## Creating a Pull Request on GitHub
1. Go to the GitHub repository website
2. GitHub will show a banner **"Compare & pull request"** → click it
   - If no banner, go to **Pull requests** tab → **New pull request**
3. Set the branches:
```
base:    dev
compare: feature/your-feature-name
```
4. Add a title and description of what you changed
5. Click **"Create pull request"**
6. Wait for teammates to review → then merge into dev

---

## Full Daily Workflow Summary
```bash
# Start of day
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name

# Terminal 1 — Frontend
cd frontend
npm run dev

# Terminal 2 — Backend
cd backend
npm start

# Test your API changes in Postman

# End of day
cd C:\Users\ppupunn\PM-Golf-Club
git add .
git commit -m "feat: what you did today"
git push origin feature/your-feature-name
# then create Pull Request on GitHub
```
