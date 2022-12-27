// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyOutlineSvg from '@ant-design/icons-svg/lib/asn/KeyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyOutline: KeyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyOutlineSvg}></AntdIcon>;
};

KeyOutline.displayName = 'KeyOutline';
KeyOutline.inheritAttrs = false;
export default KeyOutline;