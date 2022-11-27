import TechnoItems from "../components/TechnoItems";

export default function TechnoList(props) {
  const { technos } = props;
  return (
    <div className="techno-list">
      <h1>All Technos</h1>
      <div>
        {technos.map((techno) => (
          <TechnoItems techno={techno} key={techno.technoid}></TechnoItems>
        ))}
      </div>
    </div>
  );
}
