// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileProgrammingBoldSvg from '@ant-design/icons-svg/lib/asn/MobileProgrammingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileProgrammingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileProgrammingBold: MobileProgrammingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileProgrammingBoldSvg}></AntdIcon>;
};

MobileProgrammingBold.displayName = 'MobileProgrammingBold';
MobileProgrammingBold.inheritAttrs = false;
export default MobileProgrammingBold;