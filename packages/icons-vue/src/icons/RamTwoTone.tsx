// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RamTwoToneSvg from '@ant-design/icons-svg/lib/asn/RamTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RamTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RamTwoTone: RamTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RamTwoToneSvg}></AntdIcon>;
};

RamTwoTone.displayName = 'RamTwoTone';
RamTwoTone.inheritAttrs = false;
export default RamTwoTone;