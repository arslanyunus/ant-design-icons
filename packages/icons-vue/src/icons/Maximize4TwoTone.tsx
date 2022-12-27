// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize4TwoToneSvg from '@ant-design/icons-svg/lib/asn/Maximize4TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize4TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize4TwoTone: Maximize4TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize4TwoToneSvg}></AntdIcon>;
};

Maximize4TwoTone.displayName = 'Maximize4TwoTone';
Maximize4TwoTone.inheritAttrs = false;
export default Maximize4TwoTone;