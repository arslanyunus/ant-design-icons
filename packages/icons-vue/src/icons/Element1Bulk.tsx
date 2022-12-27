// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element1BulkSvg from '@ant-design/icons-svg/lib/asn/Element1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element1Bulk: Element1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element1BulkSvg}></AntdIcon>;
};

Element1Bulk.displayName = 'Element1Bulk';
Element1Bulk.inheritAttrs = false;
export default Element1Bulk;