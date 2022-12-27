// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bag2BoldSvg from '@ant-design/icons-svg/lib/asn/Bag2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bag2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bag2Bold: Bag2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bag2BoldSvg}></AntdIcon>;
};

Bag2Bold.displayName = 'Bag2Bold';
Bag2Bold.inheritAttrs = false;
export default Bag2Bold;