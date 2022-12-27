// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BezierBoldSvg from '@ant-design/icons-svg/lib/asn/BezierBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BezierBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BezierBold: BezierBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BezierBoldSvg}></AntdIcon>;
};

BezierBold.displayName = 'BezierBold';
BezierBold.inheritAttrs = false;
export default BezierBold;