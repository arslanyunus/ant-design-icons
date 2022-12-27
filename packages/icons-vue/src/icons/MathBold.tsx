// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MathBoldSvg from '@ant-design/icons-svg/lib/asn/MathBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MathBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MathBold: MathBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MathBoldSvg}></AntdIcon>;
};

MathBold.displayName = 'MathBold';
MathBold.inheritAttrs = false;
export default MathBold;