import React from 'react'

const saveDrone = (handleName, handleSubmit) => {
  return (
    <div className="social-box">
      <h3 className="heading px30">
        Welcome <span>John</span>
      </h3>
      <p className="lh-1 px14 mt-20">
        Save this custom drone and give it a name
      </p>
      <form action="" className="fpv-form">
        <input
          className="name-form"
          type="text"
          name="drone_name"
          id="drone_name"
          placeholder="Drone Name"
          onChange={handleName}
        />
        <input
          className="btn-submit bg-blue-grad mt-20"
          type="submit"
          value="Save"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  )
}

export default saveDrone
