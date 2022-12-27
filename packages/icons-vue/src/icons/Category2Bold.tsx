// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Category2BoldSvg from '@ant-design/icons-svg/lib/asn/Category2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Category2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Category2Bold: Category2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Category2BoldSvg}></AntdIcon>;
};

Category2Bold.displayName = 'Category2Bold';
Category2Bold.inheritAttrs = false;
export default Category2Bold;