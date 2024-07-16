import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ControllerUpdateRegistration } from "../../../Services/PreRegistration/controller";
import { useFetchRequestClassroomRegistration } from "../../../Services/PreRegistration/query";
import { Root } from "./type";
import { AddClassroom } from "../type";
import { ControllerClassroom } from "../../../Services/Classroom/controller";
export const RegistrationClassroomState = () => {
    const {id} = useParams()
    const {data: registrationsRequeset, isLoading} = useFetchRequestClassroomRegistration(parseInt(id!))
    const {requestDeleteRegistrationClassroomMutation, } = ControllerUpdateRegistration()
    const {requestAddClassroomMutation} = ControllerClassroom()

    const DeleteRegistration = (id: number) => {
        requestDeleteRegistrationClassroomMutation.mutate(id)
    }

    const AddStudentClassroom = (data: AddClassroom) => {
        requestAddClassroomMutation.mutate({classroom_id: data.classroom_id, student_id: data.student_id})
    }

    const [registrations, setregistrations] = useState<Root | undefined>();

    useEffect(() => {
        if(registrationsRequeset){
            setregistrations(registrationsRequeset)
        }
    }, [registrationsRequeset])


    return {registrations, DeleteRegistration, isLoading, AddStudentClassroom }
}