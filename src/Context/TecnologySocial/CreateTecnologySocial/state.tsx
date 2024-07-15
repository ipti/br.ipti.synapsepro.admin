import { TechnologySocialController } from "../../../Services/SocialTechnology/controller";

export const CreateTsState = () => {

    const {requestCreateprojectMutation} = TechnologySocialController()
    const CreateTechnology = (body: {name: string, uf: string}) => {
        requestCreateprojectMutation.mutate(body)
    }

    return {
        CreateTechnology
    }
}