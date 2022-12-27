// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardOpenLinearSvg from '@ant-design/icons-svg/lib/asn/KeyboardOpenLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardOpenLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardOpenLinear: KeyboardOpenLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardOpenLinearSvg}></AntdIcon>;
};

KeyboardOpenLinear.displayName = 'KeyboardOpenLinear';
KeyboardOpenLinear.inheritAttrs = false;
export default KeyboardOpenLinear;