import style from './Select.module.css'

function Select({
  id,
  label,
  disabledOption,
  defaultOption,
  options,
  onChange,
}) {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <select className={style.select} id={id} onChange={(e) => onChange(e)}>
        <option disabled selected>
          {disabledOption}
        </option>
        {defaultOption && (
          <option value={defaultOption.value}>{defaultOption.title}</option>
        )}
        {options.map((options) => (
          <option key={options.value} value={options.value}>
            {options.title}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select
