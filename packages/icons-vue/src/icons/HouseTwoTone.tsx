// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HouseTwoToneSvg from '@ant-design/icons-svg/lib/asn/HouseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HouseTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HouseTwoTone: HouseTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HouseTwoToneSvg}></AntdIcon>;
};

HouseTwoTone.displayName = 'HouseTwoTone';
HouseTwoTone.inheritAttrs = false;
export default HouseTwoTone;