// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Category2BulkSvg from '@ant-design/icons-svg/lib/asn/Category2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Category2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Category2Bulk: Category2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Category2BulkSvg}></AntdIcon>;
};

Category2Bulk.displayName = 'Category2Bulk';
Category2Bulk.inheritAttrs = false;
export default Category2Bulk;