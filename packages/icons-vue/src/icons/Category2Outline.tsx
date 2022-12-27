// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Category2OutlineSvg from '@ant-design/icons-svg/lib/asn/Category2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Category2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Category2Outline: Category2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Category2OutlineSvg}></AntdIcon>;
};

Category2Outline.displayName = 'Category2Outline';
Category2Outline.inheritAttrs = false;
export default Category2Outline;