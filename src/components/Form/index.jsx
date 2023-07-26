const Form = (props) => (
    <>
      <label htmlFor="pop">
        <input type='tel' id='pop' />
      </label>
      <button onClick = {props.click}> Push me</button>
    </>
)

export default Form;