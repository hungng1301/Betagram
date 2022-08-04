import User, { user_store } from "../models/user";
import Post, { post_store } from "@/models/post";

export default class HomeContentModelView {
    user_list: User[] = user_store.UserList
    post_list: Post[] = post_store.PostList
    other_user: User[] = []
    other_post: Post[] = []
    getCurAcc() {
        const CurAcc = JSON.parse(sessionStorage.getItem("CurAcc") || "{}")
        return CurAcc
    }

    getOtherUser() {
        const Cur = this.getCurAcc()
        this.other_user = this.user_list.filter((u) =>
            u.user_id != Cur.user_id
        );
        return this.other_user
    }

    getPost() {
        const Cur = this.getCurAcc()
        this.other_post = this.post_list.filter((p) => {
            return (p.user_id != Cur.user_id)
        });

        const post = this.other_post.map((post) => {
            this.other_user = this.user_list.filter((user) => 
                user.user_id == post.user_id
            )
            
            const author = this.other_user.map((author) => {
                return {
                    name: author.user_account_name,
                    ava: author.user_ava
                }
            })
            let author_name = ''
            let author_ava = ''
            author.forEach((a) => {
                author_name = a.name
                author_ava = a.ava    
            })

            return {
                id: post.post_id,
                author: author_name,
                avatar: author_ava,
                img: post.post_img,
                content: post.post_content,
                likes: post.post_likes
            }
        })
        return post
    }

    // likePost(post_id: any) {
    //     const liked = this.post_list.filter((e) => {
    //         if(e.post_id == post_id) {
    //             return(e.isLike = !e.isLike)
    //         }
    //     })
    //     console.log(liked)
    //     return liked
    // }
}

export const home_view_model = new HomeContentModelView