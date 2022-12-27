// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardOutlineSvg from '@ant-design/icons-svg/lib/asn/KeyboardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardOutline: KeyboardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardOutlineSvg}></AntdIcon>;
};

KeyboardOutline.displayName = 'KeyboardOutline';
KeyboardOutline.inheritAttrs = false;
export default KeyboardOutline;