// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RamBoldSvg from '@ant-design/icons-svg/lib/asn/RamBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RamBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RamBold: RamBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RamBoldSvg}></AntdIcon>;
};

RamBold.displayName = 'RamBold';
RamBold.inheritAttrs = false;
export default RamBold;