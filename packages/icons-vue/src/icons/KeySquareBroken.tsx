// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeySquareBrokenSvg from '@ant-design/icons-svg/lib/asn/KeySquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeySquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeySquareBroken: KeySquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeySquareBrokenSvg}></AntdIcon>;
};

KeySquareBroken.displayName = 'KeySquareBroken';
KeySquareBroken.inheritAttrs = false;
export default KeySquareBroken;