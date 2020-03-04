import posts from './data/posts'
import homeCategories from './data/home-categories'
import categoriesIdProducts from './data/categories-id-products'
import HomeProducts from './data/home-products'

export const getCategories = (params) => {
    return homeCategories.data.categories;
}

export const getProductsByCategoryId = (params) => {
    return categoriesIdProducts.data.product_list;
}

export const getHomeProducts = () => {
    return HomeProducts.data;
}

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

export default {
    fetchPosts() {
        return fetch(posts, 1000) // wait 1s before returning posts
    }
}
