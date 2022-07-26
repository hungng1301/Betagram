export default interface Post {
    post_id: number
    post_img: string
    post_content: string
    post_likes: number
    isLike: boolean
    isSave: boolean
    user_id: number
}

export class PostStore {
    PostList: Post[] = [
        {
            post_id: 1,
            post_img: "https://picsum.photos/510/300?random",
            post_content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?",
            post_likes: 100,
            isLike: false,
            isSave: false,
            user_id: 1
        },
        {
            post_id: 2,
            post_img: "https://picsum.photos/510/300?random",
            post_content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?",
            post_likes: 200,
            isLike: false,
            isSave: false,
            user_id: 2
        },
        {
            post_id: 3,
            post_img: "https://picsum.photos/510/300?random",
            post_content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?",
            post_likes: 300,
            isLike: false,
            isSave: false,
            user_id: 3
        },
        {
            post_id: 4,
            post_img: "https://picsum.photos/510/300?random",
            post_content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?",
            post_likes: 400,
            isLike: false,
            isSave: false,
            user_id: 4
        },
    ]
}

export const post_store = new PostStore 