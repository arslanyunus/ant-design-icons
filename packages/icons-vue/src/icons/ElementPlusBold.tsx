// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementPlusBoldSvg from '@ant-design/icons-svg/lib/asn/ElementPlusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementPlusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementPlusBold: ElementPlusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementPlusBoldSvg}></AntdIcon>;
};

ElementPlusBold.displayName = 'ElementPlusBold';
ElementPlusBold.inheritAttrs = false;
export default ElementPlusBold;