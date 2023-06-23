import axios from "axios";

async function getData(user_id){
    let dataList=[];

    const {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);

    const {data:userPost}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

    dataList.push(user);
    dataList.push(userPost);
    //console.log(dataList);

    return dataList;
}


export default getData;