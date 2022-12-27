// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseCrossBrokenSvg from '@ant-design/icons-svg/lib/asn/BrifecaseCrossBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseCrossBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseCrossBroken: BrifecaseCrossBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseCrossBrokenSvg}></AntdIcon>;
};

BrifecaseCrossBroken.displayName = 'BrifecaseCrossBroken';
BrifecaseCrossBroken.inheritAttrs = false;
export default BrifecaseCrossBroken;