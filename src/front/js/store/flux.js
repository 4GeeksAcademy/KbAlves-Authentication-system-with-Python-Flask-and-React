const getState = ({ getStore, getActions, setStore }) => {
	let backend=process.env.BACKEND_URL
	return {
		store: {
			message: null,
	@@ -27,7 +26,6 @@ const getState = ({ getStore, getActions, setStore }) => {
				const user=sessionStorage.getItem("user")
				let userObject=JSON.parse(user)
				if(token && token != "" && token != "undefined" ){
					setStore({token:token})
					setStore({user:userObject})
				}
	@@ -61,7 +59,6 @@ const getState = ({ getStore, getActions, setStore }) => {

			getUser:()=> {
				const store = getStore();
				fetch(backend+"api/getuser",{
					method:'GET',
					headers:{
						'Content-Type':'application/json',
						Authorization:"Bearer " + store.token
					},
				}				
			)
				.then((resp)=>resp.json())
				.then((data)=>{
					let sessionDataString = JSON.stringify(data)
					sessionStorage.setItem ("user",sessionDataString)
					setStore({user:data})
				})
			}
		}
	};
};
export default getState;