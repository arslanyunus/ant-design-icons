// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyTwoToneSvg from '@ant-design/icons-svg/lib/asn/KeyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyTwoTone: KeyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyTwoToneSvg}></AntdIcon>;
};

KeyTwoTone.displayName = 'KeyTwoTone';
KeyTwoTone.inheritAttrs = false;
export default KeyTwoTone;