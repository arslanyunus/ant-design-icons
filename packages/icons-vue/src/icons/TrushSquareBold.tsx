// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrushSquareBoldSvg from '@ant-design/icons-svg/lib/asn/TrushSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrushSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrushSquareBold: TrushSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrushSquareBoldSvg}></AntdIcon>;
};

TrushSquareBold.displayName = 'TrushSquareBold';
TrushSquareBold.inheritAttrs = false;
export default TrushSquareBold;