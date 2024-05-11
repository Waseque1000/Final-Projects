import React from "react";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";

import { useForm } from "react-hook-form";

const AddItem = () => {
  //
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="w-full pl-12">
      <SectionTitle
        subHeading={`what's New`}
        heading={"Add an item"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <label className="form-control w-full mb-6 ">
          <div className="label">
            <p className="label-text font-semibold">
              Recipe Name <span className="text-red-600  "> *</span>{" "}
            </p>
          </div>
          <input
            {...register("recipe", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </label>
        <p className="label-text mb-2 font-semibold">
          Category <span className="text-red-600  max-w-xs  "> *</span>{" "}
        </p>
        <div className=" flex ">
          <select
            {...register("category", { required: true })}
            className="select select-primary w-full  "
          >
            <option disabled selected></option>
            <option>Pizza </option>
            <option>Soup</option>
            <option>Dessart</option>
            <option>Salad</option>
            <option>Drings</option>
          </select>

          {/*  */}

          <label className="form-control -mt-9 ml-3 w-full mb-6  ">
            <div className="label">
              <p className="label-text font-semibold">
                Price <span className="text-red-600  "> *</span>{" "}
              </p>
            </div>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full  "
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details</span>
          </div>
          <textarea
            {...register("details", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </label>
        <label className="form-control w-full  ">
          <div className="label">
            <span className="label-text">Item Image</span>
          </div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
        <input
          className="btn  btn-warning mt-3 flex  justify-end mx-auto"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
