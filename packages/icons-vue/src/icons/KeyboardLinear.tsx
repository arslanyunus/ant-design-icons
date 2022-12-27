// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardLinearSvg from '@ant-design/icons-svg/lib/asn/KeyboardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardLinear: KeyboardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardLinearSvg}></AntdIcon>;
};

KeyboardLinear.displayName = 'KeyboardLinear';
KeyboardLinear.inheritAttrs = false;
export default KeyboardLinear;