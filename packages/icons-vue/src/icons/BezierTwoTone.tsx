// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BezierTwoToneSvg from '@ant-design/icons-svg/lib/asn/BezierTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BezierTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BezierTwoTone: BezierTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BezierTwoToneSvg}></AntdIcon>;
};

BezierTwoTone.displayName = 'BezierTwoTone';
BezierTwoTone.inheritAttrs = false;
export default BezierTwoTone;