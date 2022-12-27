// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CategoryBulkSvg from '@ant-design/icons-svg/lib/asn/CategoryBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CategoryBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CategoryBulk: CategoryBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CategoryBulkSvg}></AntdIcon>;
};

CategoryBulk.displayName = 'CategoryBulk';
CategoryBulk.inheritAttrs = false;
export default CategoryBulk;