// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EyeOutlineSvg from '@ant-design/icons-svg/lib/asn/EyeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EyeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EyeOutline: EyeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeOutlineSvg}></AntdIcon>;
};

EyeOutline.displayName = 'EyeOutline';
EyeOutline.inheritAttrs = false;
export default EyeOutline;