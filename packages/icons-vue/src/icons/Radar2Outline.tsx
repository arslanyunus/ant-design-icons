// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar2OutlineSvg from '@ant-design/icons-svg/lib/asn/Radar2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar2Outline: Radar2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar2OutlineSvg}></AntdIcon>;
};

Radar2Outline.displayName = 'Radar2Outline';
Radar2Outline.inheritAttrs = false;
export default Radar2Outline;