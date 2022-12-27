// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrushSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/TrushSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrushSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrushSquareBroken: TrushSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrushSquareBrokenSvg}></AntdIcon>;
};

TrushSquareBroken.displayName = 'TrushSquareBroken';
TrushSquareBroken.inheritAttrs = false;
export default TrushSquareBroken;