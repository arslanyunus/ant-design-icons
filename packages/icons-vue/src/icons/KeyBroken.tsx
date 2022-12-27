// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyBrokenSvg from '@ant-design/icons-svg/lib/asn/KeyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyBroken: KeyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyBrokenSvg}></AntdIcon>;
};

KeyBroken.displayName = 'KeyBroken';
KeyBroken.inheritAttrs = false;
export default KeyBroken;