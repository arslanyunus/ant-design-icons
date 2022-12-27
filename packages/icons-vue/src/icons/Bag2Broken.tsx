// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bag2BrokenSvg from '@ant-design/icons-svg/lib/asn/Bag2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bag2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bag2Broken: Bag2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bag2BrokenSvg}></AntdIcon>;
};

Bag2Broken.displayName = 'Bag2Broken';
Bag2Broken.inheritAttrs = false;
export default Bag2Broken;