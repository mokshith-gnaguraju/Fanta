
import React, { useState } from 'react'



const First = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = (e) => {
    e.preventDefault();
    setShowProfile((prev) => !prev);
  };

  return (
    <>
      <style>{`
        .sidebar-link:hover {
          background: #ab134bff !important;
          color: #4fc3f7 !important;
          border-radius: 6px;
          transition: background 0.2s, color 0.2s;
        }
        .navbar-link:hover {
          background: #b3e5fc !important;
          color: #222c36 !important;
          border-radius: 6px;
          transition: background 0.2s, color 0.2s;
        }
        .profile-popup button:hover {
          background: #222c36 !important;
          color: #fff !important;
          
        }
        .dashboard-section:hover {
          background: #e3f2fd !important;
          transition: background 0.2s;
        }
        .slider-img:hover {
          filter: brightness(0.85);
          transition: filter 0.2s;
        }
      `}</style>
      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, Arial, sans-serif', background: '#f4f6fb' }}>
      {/* Sidebar */}
      <aside style={{ width: '200px', background: '#222c36', color: '#fff', padding: '2rem 1rem', boxShadow: '2px 0 8px #e0e0e0' }}>
        <h2 style={{ color: '#4fc3f7', marginBottom: '2rem', textAlign: 'center',marginRight:'80px' }}>Cloudstier</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ margin: '1.5rem 0' }}><a href="#dashboard" className="sidebar-link" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', display: 'block', padding: '0.5rem 1rem' }}>Dashboard</a></li>
            <li style={{ margin: '1.5rem 0' }}><a href="#services" className="sidebar-link" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>Services</a></li>
            <li style={{ margin: '1.5rem 0' }}><a href="#team" className="sidebar-link" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>Team</a></li>
            <li style={{ margin: '1.5rem 0' }}><a href="#contact" className="sidebar-link" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>Contact</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <header style={{ background: '#4fc3f7', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px #e0e0e0' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#222c36' }}>Welcome to Cloudstier</span>
          <div>
            <a href="#profile" onClick={handleProfileClick} className="navbar-link" style={{ color: '#222c36', textDecoration: 'none', marginRight: '1.5rem', fontWeight: '500', cursor: 'pointer', padding: '0.5rem 1rem' }}>Profile</a>
            <a href="#logout" className="navbar-link" style={{ color: '#222c36', textDecoration: 'none', fontWeight: '500', cursor: 'pointer', padding: '0.5rem 1rem' }}>Logout</a>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, padding: '2.5rem', background: '#f4f6fb', position: 'relative' }}>
          {/* Profile Details Popup */}
          {showProfile && (
            <div className="profile-popup" style={{ position: 'absolute', top: '30px', right: '40px', zIndex: 10, background: 'white', borderRadius: '10px', boxShadow: '0 2px 12px #bbb', padding: '2rem', minWidth: '300px' }}>
              <h3 style={{ color: '#4fc3f7', marginBottom: '1rem' }}>Profile Details</h3>
              <p><strong>Name:</strong> Alice Johnson</p>
              <p><strong>Email:</strong> alice.johnson@cloudstier.com</p>
              <p><strong>Role:</strong> Cloud Architect</p>
              <button onClick={() => setShowProfile(false)} style={{ marginTop: '1rem', background: '#4fc3f7', color: '#fff', border: 'none', borderRadius: '5px', padding: '0.5rem 1.2rem', cursor: 'pointer' }}>Close</button>
            </div>
          )}
          <section className="dashboard-section" style={{ background: 'white', borderRadius: '10px', padding: '2rem', maxWidth: '800px', margin: '2rem auto' }}>
            <h2 style={{ color: '#4fc3f7', marginBottom: '1rem' }}>Dashboard</h2>
            <p style={{ color: '#333', fontSize: '1.1rem' }}>
              Explore your cloud resources, manage your team, and discover our latest services. Cloudstier helps you scale your business with secure and reliable cloud solutions.
            </p>
            {/* Image Slider */}
            <div style={{ width: '100%', overflow: 'hidden', borderRadius: '10px', margin: '2rem 0', boxShadow: '0 2px 8px #bbb', position: 'relative', height: '280px', background: '#eaf6fb' }}>
              <div style={{ display: 'flex', width: '2400px', animation: 'slide 18s linear infinite' }}>
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Cloud 1" className="slider-img" style={{ width: '800px', height: '280px', objectFit: 'cover' }} />
                <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80" alt="Cloud 2" className="slider-img" style={{ width: '800px', height: '280px', objectFit: 'cover' }} />
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Cloud 3" className="slider-img" style={{ width: '800px', height: '280px', objectFit: 'cover' }} />
              </div>
              <style>
              </style>
            </div>
          </section>
        </main>
      </div>
      </div>
    </>
  );
};

export default First
