export const loadPosts_3 = async () =>{

    const todosResponse = fetch('https://jsonplaceholder.typicode.com/todos');

    const[todos] = await Promise.all([todosResponse]);

    const todosJson = await todos.json();

    const allData = todosJson.map((post)=>{
        return{...post}
    });
    return allData
}