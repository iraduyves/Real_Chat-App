

function GenderCheckBox({onCheckboxChange,selectedGender}) {
  return (
    <div className="flex">
        <div className="form-control">
            <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900" id=""
                  checked={selectedGender === "male"}
                  onChange={()=>onCheckboxChange("male")}
                />
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === "Female" ? "selected" : ""}`}>
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900" id=""
                  checked={selectedGender === "Female"}
                  onChange={()=>onCheckboxChange("Female")}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox