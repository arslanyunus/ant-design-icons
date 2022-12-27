// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CategoryOutlineSvg from '@ant-design/icons-svg/lib/asn/CategoryOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CategoryOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CategoryOutline: CategoryOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CategoryOutlineSvg}></AntdIcon>;
};

CategoryOutline.displayName = 'CategoryOutline';
CategoryOutline.inheritAttrs = false;
export default CategoryOutline;