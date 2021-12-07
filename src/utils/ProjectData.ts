import JosuePic from "../assets/images/JosuePic.png";
import SergioPic from "../assets/images/SergioPic.png";
import AdrianPic from "../assets/images/AdrianPic.png";
import KaraOKELogo from "../assets/images/KaraOKE_Logo.png";
interface TeamMember {
  Name: String;
  Surname: String;
  Email: String;
  Picture: string;
  Github: string;
}

interface ProjectData {
  ProjectName: String;
  ProjectDescription: String;
  ProjectRepository: string;
  ProjectLogo: string;
  TeamName: String;
  TeamMembers: TeamMember[];
}

const ProjectData: ProjectData = {
  ProjectName: "KaraOKE",
  ProjectDescription:
    "KaraOKE is an interactive video player web app where you can easily improve your english skills by listening the music you love the most and having a good time. Playing is the best way to learn.",
  ProjectRepository: "https://github.com/Josue-Zenteno/KaraOKE",
  ProjectLogo: KaraOKELogo,
  TeamName: "Group 1",
  TeamMembers: [
    {
      Name: "Josue Carlos",
      Surname: "Zenteno Yave",
      Email: "JosueCarlos.Zenteno@alu.uclm.es",
      Picture: JosuePic,
      Github: "https://github.com/Josue-Zenteno",
    },
    {
      Name: "Sergio",
      Surname: "Silvestre Pavón",
      Email: "Sergio.Silvestre@alu.uclm.es",
      Picture: SergioPic,
      Github: "https://github.com/Sergio-Silvestre",
    },
    {
      Name: "Adrián",
      Surname: "Sánchez Miguel Ortega",
      Email: "Adrian.Sanchez14@alu.uclm.es",
      Picture: AdrianPic,
      Github: "https://github.com/Adri-Sanchez-Miguel",
    },
  ],
};

export default ProjectData;
