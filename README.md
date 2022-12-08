<!--
 * @Author: SybolYang sybolyang@qq.com
 * @Date: 2022-12-08 15:17:27
 * @LastEditors: SybolYang sybolyang@qq.com
 * @LastEditTime: 2022-12-08 15:28:11
 * @FilePath: \MobxDemo\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# MobxDemo
了解Mobx数据流向
1.创建用于存储状态的store
2.创建用于修改状态的方法
3.让Mobx可以追踪状态的变化
    1.通过observable标识状态，使状态好观察
    2.通过action表示修改状态的方法，状态只有通过action方法修改后才会通知视图更新
4.创建store类的实例对象并将实例对象传递给组件
5.在组件中通过store实例对象获取状态以及操作状态的方法
6.当组件中使用到状态管理发生变化后，视图内容更新（通过observer方法包裹组件实现目的）