// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Element4BulkSvg from '@ant-design/icons-svg/lib/asn/Element4Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Element4BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Element4Bulk: Element4BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Element4BulkSvg}></AntdIcon>;
};

Element4Bulk.displayName = 'Element4Bulk';
Element4Bulk.inheritAttrs = false;
export default Element4Bulk;