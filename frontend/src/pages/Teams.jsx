// pages/Teams.jsx
// Displays team member profiles with name, role, social media, and photo

import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Pun from "../assets/Pun.jpg";
import Jeen from "../assets/Jeen.jpg"
import Alua from "../assets/Alua.jpg"
import Pat from "../assets/Pat.jpg"
import Fuji from "../assets/Fuji.jpg"
import "../css/team.css";

// Static list of team members
const teamMembers = [
  { id: 1, name: "Punnathorn Musikphan", role: "CEO & Founder", img: Pun },
  { id: 2, name: "Napat Pigulhom", role: "CTO", img: Pat },
  { id: 3, name: "Suphanan Sumranchai", role: "Design Lead", img: Alua },
  { id: 4, name: "Yanisa Sinluksanathip", role: "Dev Lead", img: Jeen },
  { id: 5, name: "Chanathorn Khambuddee", role: "Marketing", img: Fuji },
];

function Teams() {
    return (
      <main>
      
      {/* Team members grid section */}
      <section id="team" style={{ background: "#faf8f5", minHeight: "100vh", padding: "60px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="team-title">Meet Our Team Members</h2>
          </div>

          {/* Render a card for each team member */}
          <div className="row justify-content-center g-4">
            {teamMembers.map((member) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={member.id}>
                <div className="member-card">
                  <div className="avatar-wrap">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="name-badge">{member.name}</div>
                  <div className="role-text">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <footer id="contact">
        <Footer />
      </footer>
      <ScrollToTop />
    </main>
  );
}
 
export default Teams;