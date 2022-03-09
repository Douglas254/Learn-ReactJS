import React from "react";

function Form() {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br /> {/*line break tag*/}
        {/* The textarea Tag  */}
        <textarea>Hello there, this is some text in a text area</textarea>
        <br />
        {/* The select Tag  */}
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
        <br />
        {/* The file input Tag */}
        <input type="file" />
        <br />
        {/* Submit Button  */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
