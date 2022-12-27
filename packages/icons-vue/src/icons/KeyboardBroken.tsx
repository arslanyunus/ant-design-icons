// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardBrokenSvg from '@ant-design/icons-svg/lib/asn/KeyboardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardBroken: KeyboardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardBrokenSvg}></AntdIcon>;
};

KeyboardBroken.displayName = 'KeyboardBroken';
KeyboardBroken.inheritAttrs = false;
export default KeyboardBroken;