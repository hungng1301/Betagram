import User, {user_store} from "@/models/user";

export default class ProfileViewModel {
    user_list: User[] = user_store.UserList
    CurUser: User|undefined
    getCurUser() {
        const user = JSON.parse(sessionStorage.getItem("CurAcc") || '{}')
        this.CurUser = this.user_list.find((u) => u.user_id == user.user_id)
        return this.CurUser
    }
}

export const profile_view_model = new ProfileViewModel