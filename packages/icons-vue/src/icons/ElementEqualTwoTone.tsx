// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementEqualTwoToneSvg from '@ant-design/icons-svg/lib/asn/ElementEqualTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementEqualTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementEqualTwoTone: ElementEqualTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementEqualTwoToneSvg}></AntdIcon>;
};

ElementEqualTwoTone.displayName = 'ElementEqualTwoTone';
ElementEqualTwoTone.inheritAttrs = false;
export default ElementEqualTwoTone;