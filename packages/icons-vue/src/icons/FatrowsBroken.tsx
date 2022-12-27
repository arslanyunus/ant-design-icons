// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FatrowsBrokenSvg from '@ant-design/icons-svg/lib/asn/FatrowsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FatrowsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FatrowsBroken: FatrowsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FatrowsBrokenSvg}></AntdIcon>;
};

FatrowsBroken.displayName = 'FatrowsBroken';
FatrowsBroken.inheritAttrs = false;
export default FatrowsBroken;