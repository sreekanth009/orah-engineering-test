export const ascendingSort = (list:any, updateMainList: any) => {
	// debugger
	const ascendingSortList = list.sort((a:any, b:any) => (a.first_name < b.first_name ? -1 : 1))
	return updateMainList(ascendingSortList);
}

export const descendingSort = (list:any, updateMainList: any) => {
	const descendingSortList = list.sort((a:any, b:any) => (a.first_name > b.first_name ? -1 :1));
	return updateMainList(descendingSortList);
}

export const firstNameSort = (list:any, updateMainList: any) => {
	const firstNameSortList = list.sort((a:any, b:any) => (a.firstName.localeCompare(b.firstName)));
	return updateMainList(firstNameSortList);
}

export const lastNameSort = (list:any, updateMainList: any) => {
	const lastNameSortList = list.sort((a:any, b:any) => (a.lastName.localeCompare(b.lastName)));
	return updateMainList(lastNameSortList);
}

