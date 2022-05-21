const getFilteredItems = (query:string, list:any, updateMainList: any) => {
	if (query !== "" && query.length >= 2) {
		const fList = list.filter((item: object) => item.first_name.toLowerCase().includes(query.toLowerCase()) || item.last_name.toLowerCase().includes(query.toLowerCase()))
		updateMainList(fList)
	  } else {
		updateMainList(JSON.parse(localStorage.getItem("boardingware.students") && localStorage.getItem("boardingware.students")))
	  }
}

export default getFilteredItems;
