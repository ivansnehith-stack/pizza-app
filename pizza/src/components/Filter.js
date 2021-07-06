import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

function Filter() {
	const dispatch = useDispatch();
	const [searchKey, setSearchKey] = useState("");
	const [filter, setFilter] = useState("all");
    

	return (
		<div className="container">
			<div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
				<div className="col-md-3">
					<input
						type="text"
						className="form-control "
						placeholder="Search"
						value={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
						
					/>
				</div>

				<div className="col-md-3">
					<select
						className="form-control  mt-2"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					>
						<option value="all">All</option>
						<option value="veg">Veg</option>
						<option value="nonveg">Non-Veg</option>
					</select>
				</div>

				<div className="col-md-3 ">
					<button
						className="btn-success w-50 mt-2"
						onClick={() => {
							dispatch(filterPizzas(searchKey, filter))}}>
						Filter
					</button>
				</div>
			</div>
		</div>
	);
}

export default Filter;
