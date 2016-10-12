import mcListWrap from './list-wrap'


import mcListView from './list-views'
import mcListViewCell from './list-view-cell'


import mcListItemMedia from './list-item-media'
import mcListItemContent from './list-item-content'

import mcItemTitleRow from './item-title-row'


import mcItemTitle from './item-title'
import mcItemSubTitle from './item-sub-title'
import mcItemTitleAfter from './item-title-after'


import mcItemText from './item-text'


const listView = {
	
	   mcListWrap,
	   
	   mcListView,
	   mcListViewCell,
	   
	   mcListItemMedia,
	   mcListItemContent,
	   
	   mcItemTitleRow,
	   mcItemTitle,
	   mcItemSubTitle,
	   mcItemTitleAfter,
	   
	   mcItemText
}

export default {
	
	    install(Vue) {
			
		         Object.keys(listView).forEach( (constructor) => {
					     Vue.component(constructor, listView[constructor]) 
				 })	
		} 
}