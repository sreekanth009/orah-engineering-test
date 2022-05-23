export const ascendingSort = (list:any, updateMainList: any) => {
	const copyList = [...list];
	const ascendingSortList = copyList.sort((a:any, b:any) => (a.first_name < b.first_name ? -1 : 1))
	updateMainList(ascendingSortList);
}

export const descendingSort = (list:any, updateMainList: any) => {
	const copyList = [...list];
	const descendingSortList = copyList.sort((a:any, b:any) => (a.first_name > b.first_name ? -1 :1));
	updateMainList(descendingSortList);
}

export const firstNameSort = (list:any, updateMainList: any) => {
	const copyList = [...list];
	const firstNameSortList = copyList.sort((a, b) => (a?.first_name || "").localeCompare(b?.first_name || ""));
	updateMainList(firstNameSortList);
}

export const lastNameSort = (list:any, updateMainList: any) => {
	const copyList = [...list];
	const lastNameSortList = copyList.sort((a, b) => (a?.last_name || "").localeCompare(b?.last_name || ""));
	updateMainList(lastNameSortList);
}

