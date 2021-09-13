const Reducer=(state,action)=>{
    if (action.type==='ADD_TO_CART') {
        var subtotal=state.subtotal
        const newData=state.Data.map((item)=>{
            if (item.name===action.payload.name && item.price===action.payload.price) {
                if (item.qty===0) {
                    subtotal+=parseInt(item.price)
                    item.qty=1
                }
                return item
            } else {
                return item
            }
        })
        return({...state,Data:newData,subtotal})
    }
    if (action.type==='SET_SIDEBAR_OPEN') {
        return ({...state,sidebarOpen:action.payload})
    }
    if (action.type==='REMOVE_FROM_CART') {
        var subtotal=state.subtotal
        const newData=state.Data.map((item)=>{
            if (item.name===action.payload.name && item.price===action.payload.price) {
                subtotal-=parseInt(item.qty*item.price)
                item.qty=0
                return item
            } else {
                return item
            }
        })
        return({...state,Data:newData,subtotal})
    }
    if (action.type==='INC_CART') {
        var subtotal=state.subtotal
        const newData=state.Data.map((item)=>{
            if (item.name===action.payload.name && item.price===action.payload.price) {
                item.qty=item.qty+1
                subtotal+=parseInt(item.price)
                return item
            } else {
                return item
            }
        })
        return({...state,Data:newData,subtotal})
    }
    if (action.type==='DEC_CART') {
        var subtotal=state.subtotal
        const newData=state.Data.map((item)=>{
            if (item.name===action.payload.name && item.price===action.payload.price) {
                item.qty=item.qty-1
                subtotal-=parseInt(item.price)
                return item
            } else {
                return item
            }
        })
        return({...state,Data:newData,subtotal})
    }
    throw new Error('no matching action type')
}
export default Reducer