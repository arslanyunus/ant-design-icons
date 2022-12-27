// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bag2LinearSvg from '@ant-design/icons-svg/lib/asn/Bag2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bag2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bag2Linear: Bag2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bag2LinearSvg}></AntdIcon>;
};

Bag2Linear.displayName = 'Bag2Linear';
Bag2Linear.inheritAttrs = false;
export default Bag2Linear;