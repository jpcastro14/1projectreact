export const loadPosts_2 = async () =>{
    const usersResponse = fetch('https://jsonplaceholder.typicode.com/users');
    const commentsResponse = fetch('https://jsonplaceholder.typicode.com/comments');

    const [users, comments] = await Promise.all([usersResponse, commentsResponse]);

    const usersJson = await users.json();
    const commentsJson = await comments.json();
    
    const allData = usersJson.map((post, index) => {
      return { ...post, comment: commentsJson[index].body, files: commentsJson[index].email }

    });
return allData
}