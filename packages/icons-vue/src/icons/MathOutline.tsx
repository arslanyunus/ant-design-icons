// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MathOutlineSvg from '@ant-design/icons-svg/lib/asn/MathOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MathOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MathOutline: MathOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MathOutlineSvg}></AntdIcon>;
};

MathOutline.displayName = 'MathOutline';
MathOutline.inheritAttrs = false;
export default MathOutline;