const base = {
    baseUrl: '/api/frontend_portal',
    usianBaseUrl: '/usian',
    shopcarBaseUrl: "/shopcar_api/frontend_cart",
    searchBaseUrl: "/search_api/frontend_search",
    detailBaseUrl: "/detail_api/frontend_detail",
    registerBaseUrl: "/register_api/frontend_sso",
    payMentBaseUrl:"/payment_api/frontend_order",
    menuItem: "/frontend/itemCategory/selectItemCategoryAll",        // 左侧菜单
    search: "/frontend/searchItem/list",                                 // 搜索接口
    selectFrontendContentByAD: "/frontend/content/selectFrontendContentByAD",// 首页 焦点轮播图接口
    register: '/frontend/sso/userRegister',                          // 注册接口
    checkRegister: "/frontend/sso/checkUserInfo",                    // 注册验证
    login: "/frontend/sso/userLogin",                                // 登陆接口
    logOut:"/frontend/sso/logOut",                                   // 退出登陆
    getUserByToken:"/frontend/sso/getUserByToken",                   // 通过token查询用户信息
    selectItemInfo: "/frontend/detail/selectItemInfo",                 // 商品详情页 详情接口
    selectItemDescByItemId: "/frontend/detail/selectItemDescByItemId", // 商品详情页 商品介绍
    selectTbItemParamItemByItemId: "/frontend/detail/selectTbItemParamItemByItemId",// 商品详情页 规格参数
    addItem: "/frontend/cart/addItem/",                              // 加入购物车
    showCart:"/frontend/cart/showCart",                              // 购物车列表
    updateItemNum:"/frontend/cart/updateItemNum",                    // 购物车数量变化
    deleteItemFromCart:"/frontend/cart/deleteItemFromCart",          // 购物车删除接口
    getItemList:"/frontend/order/goSettlement",                       // 去结算地址
    insertOrder:"/frontend/order/insertOrder"                        // 提交订单
}

export default base;
