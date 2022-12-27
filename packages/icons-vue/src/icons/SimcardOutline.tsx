// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SimcardOutlineSvg from '@ant-design/icons-svg/lib/asn/SimcardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SimcardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SimcardOutline: SimcardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SimcardOutlineSvg}></AntdIcon>;
};

SimcardOutline.displayName = 'SimcardOutline';
SimcardOutline.inheritAttrs = false;
export default SimcardOutline;