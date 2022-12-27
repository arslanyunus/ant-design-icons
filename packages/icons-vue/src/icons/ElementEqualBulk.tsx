// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementEqualBulkSvg from '@ant-design/icons-svg/lib/asn/ElementEqualBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementEqualBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementEqualBulk: ElementEqualBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementEqualBulkSvg}></AntdIcon>;
};

ElementEqualBulk.displayName = 'ElementEqualBulk';
ElementEqualBulk.inheritAttrs = false;
export default ElementEqualBulk;