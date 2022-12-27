// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CategoryLinearSvg from '@ant-design/icons-svg/lib/asn/CategoryLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CategoryLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CategoryLinear: CategoryLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CategoryLinearSvg}></AntdIcon>;
};

CategoryLinear.displayName = 'CategoryLinear';
CategoryLinear.inheritAttrs = false;
export default CategoryLinear;