// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyLinearSvg from '@ant-design/icons-svg/lib/asn/KeyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyLinear: KeyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyLinearSvg}></AntdIcon>;
};

KeyLinear.displayName = 'KeyLinear';
KeyLinear.inheritAttrs = false;
export default KeyLinear;