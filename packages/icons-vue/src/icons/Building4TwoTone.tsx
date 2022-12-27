// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Building4TwoToneSvg from '@ant-design/icons-svg/lib/asn/Building4TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Building4TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Building4TwoTone: Building4TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Building4TwoToneSvg}></AntdIcon>;
};

Building4TwoTone.displayName = 'Building4TwoTone';
Building4TwoTone.inheritAttrs = false;
export default Building4TwoTone;