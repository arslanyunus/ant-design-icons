// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FatrowsTwoToneSvg from '@ant-design/icons-svg/lib/asn/FatrowsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FatrowsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FatrowsTwoTone: FatrowsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FatrowsTwoToneSvg}></AntdIcon>;
};

FatrowsTwoTone.displayName = 'FatrowsTwoTone';
FatrowsTwoTone.inheritAttrs = false;
export default FatrowsTwoTone;