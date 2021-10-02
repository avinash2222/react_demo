
function Contact() {
  return (
  <>
    <h3> Contact Form:</h3>
    <label>
      Name:
      <input type="text" name="name" />
    </label>  <br />
    <label>
      Age:
      <input type="text" name="age" />
    </label> <br />
    <label>
      Sex:
      <input type="text" name="sex" />
    </label> <br />
    <input type="submit" value="Submit" />
    </>
  )
}

export default Contact