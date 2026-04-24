import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Pun from "../assets/Pun.jpg";
import Jeen from "../assets/Jeen.jpg"
import Alua from "../assets/Alua.jpg"
import Pat from "../assets/Pat.jpg"
import Fuji from "../assets/Fuji.jpg"
import "../css/team.css";

const teamMembers = [
  { id: 1, name: "Punnathorn Musikphan", role: "CEO", img: Pun, instagram: "https://www.instagram.com/ppupunn_?igsh=bnFrdWw3aDI5OGV5" },
  { id: 2, name: "Napat Pigulhom", role: "CTO", img: Pat, instagram: "https://www.instagram.com/npigulhom?igsh=MTB6ZDQ2d2xnbThsZw==" },
  { id: 3, name: "Suphanan Sumranchai", role: "Design Lead", img: Alua, instagram: "https://www.instagram.com/hqskoa?igsh=MXYwNjdxb3Rzdmcweg==" },
  { id: 4, name: "Yanisa Sinluksanathip", role: "Dev Lead", img: Jeen, instagram: "https://www.instagram.com/_j.jeen_?igsh=MW40dnJnZ3VndjdnZQ==" },
  { id: 5, name: "Chanathorn Khambuddee", role: "Marketing", img: Fuji, instagram: "https://www.instagram.com/fuji.n__?igsh=MWp0M3N6Y2txcDUyZg==" },
];

function Teams() {
  return (
    <main>
      <section id="team" style={{ background: "#faf8f5", minHeight: "100vh", padding: "60px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="team-title">Meet Our Team Members</h2>
          </div>

          <div className="row justify-content-center g-4">
            {teamMembers.map((member) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={member.id}>
                <div className="member-card">
                  <div className="avatar-wrap">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="name-badge">{member.name}</div>
                  <div className="role-text">{member.role}</div>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ig-btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
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