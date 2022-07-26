import User, {user_store} from "../models/user";
import Post, {post_store} from "@/models/post";

export default class HomeContentModelView {
    user_list: User[] = user_store.UserList
    post_list: Post[] = post_store.PostList
    other_user: User[] = []
    other_post: Post[] = []
    getCurAcc() {
        const CurAcc = JSON.parse(sessionStorage.getItem("CurAcc") || "{}")
        return CurAcc
    }

    getOtherUser(){
        const Cur = this.getCurAcc()
        this.other_user = this.user_list.filter((u) => 
            u.user_id != Cur.user_id
        );
        return this.other_user
    }
}

export const home_view_model = new HomeContentModelView