// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeySquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/KeySquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeySquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeySquareTwoTone: KeySquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeySquareTwoToneSvg}></AntdIcon>;
};

KeySquareTwoTone.displayName = 'KeySquareTwoTone';
KeySquareTwoTone.inheritAttrs = false;
export default KeySquareTwoTone;