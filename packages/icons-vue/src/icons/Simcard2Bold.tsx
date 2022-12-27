// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard2BoldSvg from '@ant-design/icons-svg/lib/asn/Simcard2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard2Bold: Simcard2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard2BoldSvg}></AntdIcon>;
};

Simcard2Bold.displayName = 'Simcard2Bold';
Simcard2Bold.inheritAttrs = false;
export default Simcard2Bold;