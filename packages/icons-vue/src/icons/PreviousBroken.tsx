// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PreviousBrokenSvg from '@ant-design/icons-svg/lib/asn/PreviousBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PreviousBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PreviousBroken: PreviousBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PreviousBrokenSvg}></AntdIcon>;
};

PreviousBroken.displayName = 'PreviousBroken';
PreviousBroken.inheritAttrs = false;
export default PreviousBroken;