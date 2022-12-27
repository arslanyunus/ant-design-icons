// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VerifyOutlineSvg from '@ant-design/icons-svg/lib/asn/VerifyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VerifyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VerifyOutline: VerifyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VerifyOutlineSvg}></AntdIcon>;
};

VerifyOutline.displayName = 'VerifyOutline';
VerifyOutline.inheritAttrs = false;
export default VerifyOutline;