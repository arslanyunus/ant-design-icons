// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar1BoldSvg from '@ant-design/icons-svg/lib/asn/Radar1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar1Bold: Radar1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar1BoldSvg}></AntdIcon>;
};

Radar1Bold.displayName = 'Radar1Bold';
Radar1Bold.inheritAttrs = false;
export default Radar1Bold;