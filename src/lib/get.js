import get from 'lodash/get';
export default function getter(path){
  return (props)=>get(props,path);
}
