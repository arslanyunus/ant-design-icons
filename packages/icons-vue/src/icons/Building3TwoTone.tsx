// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Building3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building3TwoTone: Building3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building3TwoToneSvg}></AntdIcon>;
};

Building3TwoTone.displayName = 'Building3TwoTone';
Building3TwoTone.inheritAttrs = false;
export default Building3TwoTone;