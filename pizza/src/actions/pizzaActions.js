import axios from "axios";
export const getAllPizzas = () => async (dispatch) => {
	dispatch({
		type: "GET_PIZZA_REQUEST",
	});

	try {
		const response = await axios.get("/api/pizzas/getallpizzas");
		console.log(response);
		dispatch({
			type: "GET_PIZZA_SUCCESS",
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: "GET_PIZZA_FAILED",
			payload: error,
		});
	}
};

export const filterPizzas = (searchKey, filter) => async (dispatch) => {
	var filteredPizzas;
	dispatch({
		type: "GET_PIZZA_REQUEST",
	});

	try {
		const response = await axios.get("/api/pizzas/getallpizzas");
		filteredPizzas = response.data.filter((pizza) =>
			pizza.name.toLowerCase().includes(searchKey)
		)

		if (filter != "all") {
			filteredPizzas = response.data.filter((pizza) =>
				pizza.category.toLowerCase() == filter)
    }
		
		dispatch({
			type: "GET_PIZZA_SUCCESS",
			payload: filteredPizzas,
		});

	} catch (error) {
		dispatch({
			type: "GET_PIZZA_FAILED",
			payload: error,
		});
	}
};
