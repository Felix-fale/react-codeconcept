export default function TechnoAdd() {
  return (
    <div className="techno-add">
      <h1>Add a Techno</h1>
      <div>
        <form action="">
          <label htmlFor="techno-name">Name:</label>
          <br />
          <input type="text" name="techno-name" id="techno-name" />
          <br />
          <label htmlFor="techno-category">Category:</label>
          <br />
          <select name="techno-category" id="techno-category">
            <option value="">Select a category</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Fullstack</option>
            <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="techno-description">Description:</label>
          <br />
          <textarea
            name="techno-description"
            id="techno-description"
            // @ts-ignore
            cols="30"
            // @ts-ignore
            rows="10"
          ></textarea>
          <br />
          <input type="submit" value="add Techno" />
        </form>
      </div>
    </div>
  );
}
