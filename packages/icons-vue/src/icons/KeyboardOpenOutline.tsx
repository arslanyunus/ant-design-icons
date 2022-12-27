// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyboardOpenOutlineSvg from '@ant-design/icons-svg/lib/asn/KeyboardOpenOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyboardOpenOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyboardOpenOutline: KeyboardOpenOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyboardOpenOutlineSvg}></AntdIcon>;
};

KeyboardOpenOutline.displayName = 'KeyboardOpenOutline';
KeyboardOpenOutline.inheritAttrs = false;
export default KeyboardOpenOutline;