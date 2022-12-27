// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampBoldSvg from '@ant-design/icons-svg/lib/asn/LampBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampBold: LampBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampBoldSvg}></AntdIcon>;
};

LampBold.displayName = 'LampBold';
LampBold.inheritAttrs = false;
export default LampBold;