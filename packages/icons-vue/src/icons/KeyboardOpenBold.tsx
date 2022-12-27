// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardOpenBoldSvg from '@ant-design/icons-svg/lib/asn/KeyboardOpenBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardOpenBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardOpenBold: KeyboardOpenBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardOpenBoldSvg}></AntdIcon>;
};

KeyboardOpenBold.displayName = 'KeyboardOpenBold';
KeyboardOpenBold.inheritAttrs = false;
export default KeyboardOpenBold;