const Debounce = (func:any) => {
  let timer:any;
	return function(...args:any){
		const context = this;
		if(timer) clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			func.apply(context, args);
		}, 500);
	}
}

export default Debounce;
