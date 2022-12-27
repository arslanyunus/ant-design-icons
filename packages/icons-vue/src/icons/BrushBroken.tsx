// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrushBrokenSvg from '@ant-design/icons-svg/lib/asn/BrushBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrushBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrushBroken: BrushBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrushBrokenSvg}></AntdIcon>;
};

BrushBroken.displayName = 'BrushBroken';
BrushBroken.inheritAttrs = false;
export default BrushBroken;