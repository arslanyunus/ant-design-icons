// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeySquareLinearSvg from '@ant-design/icons-svg/lib/asn/KeySquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeySquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeySquareLinear: KeySquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeySquareLinearSvg}></AntdIcon>;
};

KeySquareLinear.displayName = 'KeySquareLinear';
KeySquareLinear.inheritAttrs = false;
export default KeySquareLinear;