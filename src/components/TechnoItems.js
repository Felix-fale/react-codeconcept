export default function TechnoItems(props) {
  const { techno } = props;
  return (
    <div key={techno.technoid}>
      <h2>{techno.technoname} </h2>
      <h3>Category</h3>
      <p>{techno.technocategory} </p>
      <h3>Description</h3>
      <p>{techno.technodescription} </p>
    </div>
  );
}
