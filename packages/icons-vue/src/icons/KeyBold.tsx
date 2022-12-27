// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyBoldSvg from '@ant-design/icons-svg/lib/asn/KeyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyBold: KeyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyBoldSvg}></AntdIcon>;
};

KeyBold.displayName = 'KeyBold';
KeyBold.inheritAttrs = false;
export default KeyBold;