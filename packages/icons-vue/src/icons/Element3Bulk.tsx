// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element3BulkSvg from '@ant-design/icons-svg/lib/asn/Element3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element3Bulk: Element3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element3BulkSvg}></AntdIcon>;
};

Element3Bulk.displayName = 'Element3Bulk';
Element3Bulk.inheritAttrs = false;
export default Element3Bulk;