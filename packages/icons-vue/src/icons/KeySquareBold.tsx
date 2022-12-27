// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeySquareBoldSvg from '@ant-design/icons-svg/lib/asn/KeySquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeySquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeySquareBold: KeySquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeySquareBoldSvg}></AntdIcon>;
};

KeySquareBold.displayName = 'KeySquareBold';
KeySquareBold.inheritAttrs = false;
export default KeySquareBold;