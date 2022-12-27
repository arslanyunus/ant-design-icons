// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardTwoToneSvg from '@ant-design/icons-svg/lib/asn/KeyboardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardTwoTone: KeyboardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardTwoToneSvg}></AntdIcon>;
};

KeyboardTwoTone.displayName = 'KeyboardTwoTone';
KeyboardTwoTone.inheritAttrs = false;
export default KeyboardTwoTone;