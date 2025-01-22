import { useEffect, useState } from "react";
import { useFetchRequestClassroomClasses } from "../../../Services/Classroom/query";
import { GetIdUser } from "../../../Services/localstorage";
import { ClassesList } from "./type";
export const ClassesClassroomState = () => {

    const user = GetIdUser()
    const { data: classesRequeset, isLoading } = useFetchRequestClassroomClasses(user?.teacher?.id)


    const [classes, setclasses] = useState<ClassesList | undefined>();

    useEffect(() => {
        if (classesRequeset) {
            const clas = classesRequeset.map((item: any) => {
                return {
                    ...item, lessons: Object.keys(item?.lessons).map(key => ({
                        lesson_id: item.lessons[key].lesson_id,
                        tasks_id: item.lessons[key].tasks_id
                    }))
                }
            })
            setclasses(clas)
        }
    }, [classesRequeset])


    return { classes, isLoading }
}