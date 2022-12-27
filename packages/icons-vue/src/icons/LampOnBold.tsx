// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampOnBoldSvg from '@ant-design/icons-svg/lib/asn/LampOnBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampOnBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampOnBold: LampOnBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampOnBoldSvg}></AntdIcon>;
};

LampOnBold.displayName = 'LampOnBold';
LampOnBold.inheritAttrs = false;
export default LampOnBold;