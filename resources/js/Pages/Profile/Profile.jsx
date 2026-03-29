import { useAuth } from "../../providers/AuthProvider"
import { router } from "@inertiajs/react"
import { useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"

export default function Profile() {

    const { user } = useAuth()

    useEffect(() => {
        console.log(user?.id)
    }, [user])

    const deleteAccount = (id) => {
        router.delete(`/user/${id}`, {
            onError: (errors) => {
                toast.error("error")
            }
        })
    }

    return(
        <div>
            <ToastContainer/>
            {user ? (
                <div>
                    <h1>User page</h1>
                    <h2>welcome {user.name}!</h2>
                    <button
                        onClick={() => deleteAccount(user.id)}
                        className="bg-gray-500 cursor-pointer p-2 text-white"
                    >Delete Account</button>
                </div>    
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}