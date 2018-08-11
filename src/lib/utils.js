import get from 'lodash/get';
export const g = (path) => (props)=>get(props,path);
export const tcolor = (name)=>({ theme: { colors }})=>colors[name];
