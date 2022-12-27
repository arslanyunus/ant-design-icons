// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward5SecondsBoldSvg from '@ant-design/icons-svg/lib/asn/Backward5SecondsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward5SecondsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward5SecondsBold: Backward5SecondsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward5SecondsBoldSvg}></AntdIcon>;
};

Backward5SecondsBold.displayName = 'Backward5SecondsBold';
Backward5SecondsBold.inheritAttrs = false;
export default Backward5SecondsBold;