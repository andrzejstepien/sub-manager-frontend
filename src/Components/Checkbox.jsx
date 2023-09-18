export default ({ label, value, name, onChange }) => {
  return (
    <label>
      {label}
      <input type="checkbox" name={name} checked={value} onChange={()=>{onChange(label)}} />
    </label>
  )
}