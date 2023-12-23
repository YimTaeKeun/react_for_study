import ListMapComponent from "./listMapComponent";
const ListBoundary = () =>{
    let list = []
    for(let i = 0; i < 10; i++) list[i] = Math.floor(Math.random() * 100 + 1);
    list.sort(function(a, b){
        if(a - b > 0) return 1;
        else if(a == b) return 0;
        else return -1;
    });
    return <div className="ListBoundary">
        {list.map((each) => (<ListMapComponent props={each}/>))}

    </div>
}
export default ListBoundary;