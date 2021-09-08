/**
 *
 *  所有接口函数聚合
 *
 *
 * */

//导入函数对象，既可以作为函数，又可以作为对象
import service from './ajax'


// 三级分类  分别暴露

export function queryCategory() {
    return service.get('/category/query')
}