// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward10SecondsBoldSvg from '@ant-design/icons-svg/lib/asn/Backward10SecondsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward10SecondsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward10SecondsBold: Backward10SecondsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward10SecondsBoldSvg}></AntdIcon>;
};

Backward10SecondsBold.displayName = 'Backward10SecondsBold';
Backward10SecondsBold.inheritAttrs = false;
export default Backward10SecondsBold;