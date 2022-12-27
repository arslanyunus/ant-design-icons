// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BezierBrokenSvg from '@ant-design/icons-svg/lib/asn/BezierBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BezierBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BezierBroken: BezierBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BezierBrokenSvg}></AntdIcon>;
};

BezierBroken.displayName = 'BezierBroken';
BezierBroken.inheritAttrs = false;
export default BezierBroken;