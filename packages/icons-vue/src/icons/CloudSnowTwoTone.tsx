// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudSnowTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudSnowTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudSnowTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudSnowTwoTone: CloudSnowTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudSnowTwoToneSvg}></AntdIcon>;
};

CloudSnowTwoTone.displayName = 'CloudSnowTwoTone';
CloudSnowTwoTone.inheritAttrs = false;
export default CloudSnowTwoTone;