import {queryCategory} from '@/api'

const state = {
    categoryList:[

    ]
};

const mutations={
    INIT_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList;
    }
};


const actions={
    async getCategoryList({commit}){
        const result = await queryCategory();
        if (result.code === 0) {
            commit('INIT_CATEGORY_LIST',result.data)
        }else{
            //失败
        }
    }
};

const getters = {
    categoryList:(state)=>state.categoryList
};

//默认暴露
export default {
    state,
    mutations,
    actions,
    getters
}