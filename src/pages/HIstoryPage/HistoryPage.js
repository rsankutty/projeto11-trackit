import { useAuth } from "../../providers/auth";


export default function HistoryPage(){
    const {userToken} = useAuth()

    return(
        <h1>{userToken}</h1>
    );
}