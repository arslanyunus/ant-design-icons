// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar2LinearSvg from '@ant-design/icons-svg/lib/asn/Radar2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar2Linear: Radar2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar2LinearSvg}></AntdIcon>;
};

Radar2Linear.displayName = 'Radar2Linear';
Radar2Linear.inheritAttrs = false;
export default Radar2Linear;