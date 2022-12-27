// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardOpenBrokenSvg from '@ant-design/icons-svg/lib/asn/KeyboardOpenBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardOpenBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardOpenBroken: KeyboardOpenBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardOpenBrokenSvg}></AntdIcon>;
};

KeyboardOpenBroken.displayName = 'KeyboardOpenBroken';
KeyboardOpenBroken.inheritAttrs = false;
export default KeyboardOpenBroken;