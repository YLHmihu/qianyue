export default [
    //首页
    {
        path: "/",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    //材料准备页
    {
        path: "/aprepare",
        name: "aprepare",
        component: () => import("../views/newBuilt/aprepare.vue"),
    },
    //步骤一
    {
        path: "/firstStep",
        name: "firstStep",
        component: () => import("../views/newBuilt/procedure/firstStep.vue"),
    },
    //步骤二
    {
        path: "/secondStep",
        name: "secondStep",
        component: () => import("../views/newBuilt/procedure/secondStep.vue"),
    },
    //步骤三
    {
        path: "/thirdStep",
        name: "thirdStep",
        component: () => import("../views/newBuilt/procedure/thirdStep.vue"),
    },
    //信息确认页
    {
        path: "/determine",
        name: "determine",
        component: () => import("../views/newBuilt/determine.vue"),
    },
    //提交成功页
    {
        path: "/submittedSuccessfully",
        name: "submittedSuccessfully",
        component: () => import("../views/newBuilt/submittedSuccessfully.vue"),
    },
    //审核进度查询页
    {
        path: "/examine",
        name: "examine",
        component: () => import("../views/query/examine.vue"),
    },
];
