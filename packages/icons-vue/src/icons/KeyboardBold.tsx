// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardBoldSvg from '@ant-design/icons-svg/lib/asn/KeyboardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardBold: KeyboardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardBoldSvg}></AntdIcon>;
};

KeyboardBold.displayName = 'KeyboardBold';
KeyboardBold.inheritAttrs = false;
export default KeyboardBold;