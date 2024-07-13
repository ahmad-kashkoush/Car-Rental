import { AboutBanner } from '@/components';
import HeroPages from '@/shared/HeroPages';
const teamMembers = [
  {
    id: '1',
    img: 'images/team/1.png',
    name: 'Emmanuel',
    jobTitle: 'Frontend Developer',
  },
  {
    id: '2',
    img: 'images/team/2.png',
    name: 'Isaac',
    jobTitle: 'Backend Developer',
  },
  {
    id: '3',
    img: 'images/team/1.png',
    name: 'Nana',
    jobTitle: 'Product Manager',
  },
  {
    id: '4',
    img: 'images/team/2.png',
    name: 'Abena',
    jobTitle: 'Design Engineer',
  },
  {
    id: '5',
    img: 'images/team/5.png',
    name: 'Akosua',
    jobTitle: 'Project Manager',
  },
  {
    id: '6',
    img: 'images/team/2.png',
    name: 'Kwame',
    jobTitle: 'Devops Engineer',
  },
];

function Team() {
  return (
    <main>
      <HeroPages pageTitle={'Our Team'} />
      <section className="team mt-[10rem] bg-white py-32 pt-52">
        <div className="member-cards-wrapper container">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="member justify-self-center bg-bg-secondary shadow-lg py-4 px-8"
            >
              <img src={member.img} />
              <p className="mt-4 text-center text-xl font-semibold text-title">
                {member.name}
              </p>
              <p className="mt-2 text-center">{member.jobTitle}</p>
            </div>
          ))}
        </div>
      </section>
      <AboutBanner />
    </main>
  );
}
export default Team;
