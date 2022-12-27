// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward10SecondsBrokenSvg from '@ant-design/icons-svg/lib/asn/Backward10SecondsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward10SecondsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward10SecondsBroken: Backward10SecondsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward10SecondsBrokenSvg}></AntdIcon>;
};

Backward10SecondsBroken.displayName = 'Backward10SecondsBroken';
Backward10SecondsBroken.inheritAttrs = false;
export default Backward10SecondsBroken;