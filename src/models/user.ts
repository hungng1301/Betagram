export default interface User {
    user_id: number,
    user_account_name: string,
    user_name: string,
    user_ava: string,
    phone_number: string,
    password: string
}

export class UserStored {
    UserList: User[] = [
        {
            user_id: 1,
            user_account_name: "cristiano",
            user_name: "Cristiano Ronaldo",
            user_ava: "https://th.bing.com/th/id/OIP.bUClKEJ4foIv-nIC1zDVHAHaFj?pid=ImgDet&rs=1",
            phone_number: "0123456789",
            password: "ronaldo7"
        },
        {
            user_id: 2,
            user_account_name: "de_gea",
            user_name: "David de Gea",
            user_ava: "https://th.bing.com/th/id/R.d1172973a3e499b2f006e874a87cdba1?rik=Co8oVkT5iO9TCA&pid=ImgRaw&r=0",
            phone_number: "0123456789",
            password: "degea1"
        },
        {
            user_id: 3,
            user_account_name: "leomessi",
            user_name: "Lionel Messi",
            user_ava: "https://th.bing.com/th/id/R.21b7b9cc03c5ddb40bb94c71715b7a01?rik=6dp91PrQSgvjpA&pid=ImgRaw&r=0",
            phone_number: "0123456789",
            password: "leomessi10"
        },
        {
            user_id: 4,
            user_account_name: "dyhugn_ng",
            user_name: "Nguyen Duy Hung",
            user_ava: "https://th.bing.com/th/id/R.f88800e0bbc06d5d5ad9720520c4a32c?rik=iePp89JhG0sAVg&pid=ImgRaw&r=0",
            phone_number: "0123456789",
            password: "hung13"
        },
    ]
}

export const user_store = new UserStored