import "./Write.css";

export default function Write() {
  const src =
    "https://source.unsplash.com/random/250x2" +
    Math.floor(Math.random() * (98 - 11) + 11);

  return (
    <div className="write">
      <img src={src} alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeFormIcon fa-solid fa-file-circle-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="writeInput"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your things..."
            type="text"
            id=""
            cols="30"
            rows="10"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publich</button>
      </form>
    </div>
  );
}
