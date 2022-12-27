// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardOpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/KeyboardOpenTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardOpenTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardOpenTwoTone: KeyboardOpenTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardOpenTwoToneSvg}></AntdIcon>;
};

KeyboardOpenTwoTone.displayName = 'KeyboardOpenTwoTone';
KeyboardOpenTwoTone.inheritAttrs = false;
export default KeyboardOpenTwoTone;