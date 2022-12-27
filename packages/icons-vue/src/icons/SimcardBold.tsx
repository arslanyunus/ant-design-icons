// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SimcardBoldSvg from '@ant-design/icons-svg/lib/asn/SimcardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SimcardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SimcardBold: SimcardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SimcardBoldSvg}></AntdIcon>;
};

SimcardBold.displayName = 'SimcardBold';
SimcardBold.inheritAttrs = false;
export default SimcardBold;