interface Section {
  Label: string;
  Route: string;
}

const Sections: Section[] = [
  {
    Label: "Normal Video Player",
    Route: "/video-player",
  },
  {
    Label: "Learn English",
    Route: "/interactive-video-player",
  },
  {
    Label: "About",
    Route: "/about",
  },
];

export default Sections;
