// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward15SecondsBoldSvg from '@ant-design/icons-svg/lib/asn/Backward15SecondsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward15SecondsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward15SecondsBold: Backward15SecondsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward15SecondsBoldSvg}></AntdIcon>;
};

Backward15SecondsBold.displayName = 'Backward15SecondsBold';
Backward15SecondsBold.inheritAttrs = false;
export default Backward15SecondsBold;