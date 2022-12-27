// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bag2OutlineSvg from '@ant-design/icons-svg/lib/asn/Bag2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bag2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bag2Outline: Bag2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bag2OutlineSvg}></AntdIcon>;
};

Bag2Outline.displayName = 'Bag2Outline';
Bag2Outline.inheritAttrs = false;
export default Bag2Outline;