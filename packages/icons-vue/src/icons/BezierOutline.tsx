// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BezierOutlineSvg from '@ant-design/icons-svg/lib/asn/BezierOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BezierOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BezierOutline: BezierOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BezierOutlineSvg}></AntdIcon>;
};

BezierOutline.displayName = 'BezierOutline';
BezierOutline.inheritAttrs = false;
export default BezierOutline;