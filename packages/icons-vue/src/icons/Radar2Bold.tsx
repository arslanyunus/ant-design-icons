// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar2BoldSvg from '@ant-design/icons-svg/lib/asn/Radar2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar2Bold: Radar2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar2BoldSvg}></AntdIcon>;
};

Radar2Bold.displayName = 'Radar2Bold';
Radar2Bold.inheritAttrs = false;
export default Radar2Bold;