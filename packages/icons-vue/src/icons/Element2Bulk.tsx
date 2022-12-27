// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element2BulkSvg from '@ant-design/icons-svg/lib/asn/Element2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element2Bulk: Element2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element2BulkSvg}></AntdIcon>;
};

Element2Bulk.displayName = 'Element2Bulk';
Element2Bulk.inheritAttrs = false;
export default Element2Bulk;