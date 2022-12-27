// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bag2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Bag2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bag2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bag2TwoTone: Bag2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bag2TwoToneSvg}></AntdIcon>;
};

Bag2TwoTone.displayName = 'Bag2TwoTone';
Bag2TwoTone.inheritAttrs = false;
export default Bag2TwoTone;