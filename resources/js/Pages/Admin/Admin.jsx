import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Input from "./Input";
import { useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import {usePage} from "@inertiajs/react";

export default function Admin() {
    const [category, setCategory] = useState("");
    const [username, setUsername] = useState("")
    const { props } = usePage()
    const { flash } = props

    const { data, setData, post, processing, errors } = useForm({
        title: ''
    });

    useEffect(() => {
        if(flash?.success) {
            toast.success(flash.success)
        }
    }, [flash])

    const createCategory = () => {
        console.log('a')
        if(data.title != null) {
            console.log('b')
            post('/category', {
                onError: err => {
                    if(err.title) {
                        toast.error(err.title)
                    }
                },
                onSuccess: (page) => {
                    if (page.props.flash?.success) {
                        toast.success(page.props.flash.success);
                    }
                    setData('title', '')
                }
            })
        }
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-[#4C1D95] to-[#1E0B44] text-[#E9D5FF]">
            <Header />
            <ToastContainer/>
            <div className="max-w-2xl mx-auto p-10">
                <h1 className="text-2xl font-bold text-white mb-6">Pievienot Kategoriju</h1>
                
                <div className="bg-[#2E1065] p-8 rounded-lg border border-[#4C1D95] shadow-xl">
                    <Input
                    title="nosaukums"
                    placeholder="ievadi nosaukumu"
                    value = {data.title}
                    onChange={value => setData('title', value)}
                    onSubmit={() => createCategory()}/>
                </div> 

                <h1 className="text-2xl font-bold text-white mb-6">Pārvērst lietotāju par administrātoru</h1>
                
                <div className="bg-[#2E1065] p-8 rounded-lg border border-[#4C1D95] shadow-xl">
                    <Input
                    title="Lietotājvārds"
                    placeholder="ievadi lietotājvārdu"
                    value = {username}
                    onChange={value => setUsername(value)}
                    onSubmit={() => {}}/>
                </div> 
            </div>
        </div>
    );
}