// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CategoryBrokenSvg from '@ant-design/icons-svg/lib/asn/CategoryBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CategoryBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CategoryBroken: CategoryBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CategoryBrokenSvg}></AntdIcon>;
};

CategoryBroken.displayName = 'CategoryBroken';
CategoryBroken.inheritAttrs = false;
export default CategoryBroken;