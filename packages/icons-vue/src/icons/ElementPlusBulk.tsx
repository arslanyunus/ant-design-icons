// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementPlusBulkSvg from '@ant-design/icons-svg/lib/asn/ElementPlusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementPlusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementPlusBulk: ElementPlusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementPlusBulkSvg}></AntdIcon>;
};

ElementPlusBulk.displayName = 'ElementPlusBulk';
ElementPlusBulk.inheritAttrs = false;
export default ElementPlusBulk;