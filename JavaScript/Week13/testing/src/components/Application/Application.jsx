const Application = () => {
  return (
    <>
      <h3>Registration Form</h3>
      <h4>Keyin Job</h4>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a Country</option>
            <option value="Kitchener"></option>
            <option value="London"></option>
            <option value="St. Johns"></option>
          </select>
        </div>
        <div>
          <input type="checkbox" value="Terms" />
        </div>

        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </>
  );
};

export default Application;
