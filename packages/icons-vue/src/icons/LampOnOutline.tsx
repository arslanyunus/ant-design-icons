// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampOnOutlineSvg from '@ant-design/icons-svg/lib/asn/LampOnOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampOnOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampOnOutline: LampOnOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampOnOutlineSvg}></AntdIcon>;
};

LampOnOutline.displayName = 'LampOnOutline';
LampOnOutline.inheritAttrs = false;
export default LampOnOutline;