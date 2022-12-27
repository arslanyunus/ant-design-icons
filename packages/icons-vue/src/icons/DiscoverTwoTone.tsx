// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscoverTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiscoverTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscoverTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscoverTwoTone: DiscoverTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscoverTwoToneSvg}></AntdIcon>;
};

DiscoverTwoTone.displayName = 'DiscoverTwoTone';
DiscoverTwoTone.inheritAttrs = false;
export default DiscoverTwoTone;