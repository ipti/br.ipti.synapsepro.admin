import { TechnologySocialController } from "../../../Services/SocialTechnology/controller";

export const CreateTsState = () => {

    const {requestCreateprojectMutation} = TechnologySocialController()
    const CreateTechnology = (body: {name: string}) => {
        requestCreateprojectMutation.mutate(body)
    }

    return {
        CreateTechnology
    }
}