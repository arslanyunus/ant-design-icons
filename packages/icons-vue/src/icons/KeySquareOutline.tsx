// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeySquareOutlineSvg from '@ant-design/icons-svg/lib/asn/KeySquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeySquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeySquareOutline: KeySquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeySquareOutlineSvg}></AntdIcon>;
};

KeySquareOutline.displayName = 'KeySquareOutline';
KeySquareOutline.inheritAttrs = false;
export default KeySquareOutline;