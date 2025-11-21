export default function Homepage() {

  const restaurants = [
    {
      id: 1,
      name: "AFC",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1604908177522-0a9c39051a89"
    },
    {
      id: 2,
      name: "The Taste of Era",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1526318472351-c75fcf070f10"
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Restaurants</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        
        {restaurants.map((res) => (
          <div key={res.id} style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}>
            
            <img 
              src={res.image} 
              alt={res.name} 
              style={{ width: "100%", height: "130px", borderRadius: "8px", objectFit: "cover" }}
            />

            <h3 style={{ margin: "10px 0 5px" }}>{res.name}</h3>
            <p>⭐ {res.rating}</p>
          </div>
        ))}

      </div>
    </div>
  );
}