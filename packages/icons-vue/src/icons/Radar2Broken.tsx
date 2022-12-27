// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar2BrokenSvg from '@ant-design/icons-svg/lib/asn/Radar2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar2Broken: Radar2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar2BrokenSvg}></AntdIcon>;
};

Radar2Broken.displayName = 'Radar2Broken';
Radar2Broken.inheritAttrs = false;
export default Radar2Broken;