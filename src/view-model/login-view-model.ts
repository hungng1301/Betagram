import router from "@/router";
import User, {user_store} from "../models/user"

export default class LoginViewModel {
    user_list: User[] = user_store.UserList
    check!: boolean
    login(login_name: string, password: string) {
        if(login_name != "" && password != "") {
            let u: any
            for(u in this.user_list){
                if(login_name === this.user_list[u].user_account_name || login_name === this.user_list[u].phone_number){
                    if(password === this.user_list[u].password) {
                        this.check = false
                        sessionStorage.setItem("CurAcc", JSON.stringify(this.user_list[u]))
                        router.replace({name: 'home-content'})
                        break
                    } else {
                        this.check = true
                    }
                } else {
                    this.check = true
                }
            }
        } else {
            this.check = true
        }
    }

    logout() {
        sessionStorage.removeItem("CurAcc")
        router.replace({name: 'login'})
    }
}

export const login_view_model = new LoginViewModel