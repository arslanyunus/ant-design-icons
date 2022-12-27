// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard2LinearSvg from '@ant-design/icons-svg/lib/asn/Simcard2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard2Linear: Simcard2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard2LinearSvg}></AntdIcon>;
};

Simcard2Linear.displayName = 'Simcard2Linear';
Simcard2Linear.inheritAttrs = false;
export default Simcard2Linear;