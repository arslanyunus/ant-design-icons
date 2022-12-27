// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward5SecondsBrokenSvg from '@ant-design/icons-svg/lib/asn/Backward5SecondsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward5SecondsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward5SecondsBroken: Backward5SecondsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward5SecondsBrokenSvg}></AntdIcon>;
};

Backward5SecondsBroken.displayName = 'Backward5SecondsBroken';
Backward5SecondsBroken.inheritAttrs = false;
export default Backward5SecondsBroken;