// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CategoryBoldSvg from '@ant-design/icons-svg/lib/asn/CategoryBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CategoryBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CategoryBold: CategoryBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CategoryBoldSvg}></AntdIcon>;
};

CategoryBold.displayName = 'CategoryBold';
CategoryBold.inheritAttrs = false;
export default CategoryBold;