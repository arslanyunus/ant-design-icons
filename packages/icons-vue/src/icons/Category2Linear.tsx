// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Category2LinearSvg from '@ant-design/icons-svg/lib/asn/Category2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Category2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Category2Linear: Category2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Category2LinearSvg}></AntdIcon>;
};

Category2Linear.displayName = 'Category2Linear';
Category2Linear.inheritAttrs = false;
export default Category2Linear;