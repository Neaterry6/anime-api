

### **README.md**
```md
# Anime Search API 🚀
A simple **Anime Search API** created by **Ayanfe** using **Jikan API**.

## Features
✅ **Search for any anime by name**  
✅ **Fetch details like synopsis, genres, and ratings**  
✅ **No API key required**  

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/ayanfe/anime-search-api.git
   ```
2. Navigate into the directory:
   ```bash
   cd anime-search-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
### **Start the API Server**
```bash
npm start
```
Or for development mode (auto-restarts):
```bash
npm run dev
```

### **API Endpoint**
**GET `/api/anime?query={anime_name}`**  
_Searches for an anime based on its title._

#### **Example Request**
```
GET https://your-api-url.com/api/anime?query=Naruto
```

#### **Example Response**
```json
{
  "data": [
    {
      "title": "Naruto",
      "synopsis": "A young ninja strives to become Hokage...",
      "genres": ["Action", "Adventure"],
      "score": 8.3,
      "episodes": 220
    }
  ]
}
```

## Technologies Used
- Node.js
- Express.js
- Axios
- Jikan API

## Contributing
Feel free to fork, modify, and submit pull requests to improve this API.

## License
This project is open-source under the **MIT License**.
