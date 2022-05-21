const getFilteredItems = (query:string, list:[]) => {
	if(!query){
		return list
	}
	return list.filter((item:object) =>
		item.first_name.toLowerCase().includes(query.toLowerCase()) || item.last_name.toLowerCase().includes(query.toLowerCase())
	)
}

export default getFilteredItems;
