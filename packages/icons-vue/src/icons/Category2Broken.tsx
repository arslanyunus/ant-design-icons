// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Category2BrokenSvg from '@ant-design/icons-svg/lib/asn/Category2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Category2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Category2Broken: Category2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Category2BrokenSvg}></AntdIcon>;
};

Category2Broken.displayName = 'Category2Broken';
Category2Broken.inheritAttrs = false;
export default Category2Broken;