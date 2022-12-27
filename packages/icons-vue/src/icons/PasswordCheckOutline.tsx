// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PasswordCheckOutlineSvg from '@ant-design/icons-svg/lib/asn/PasswordCheckOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PasswordCheckOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PasswordCheckOutline: PasswordCheckOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PasswordCheckOutlineSvg}></AntdIcon>;
};

PasswordCheckOutline.displayName = 'PasswordCheckOutline';
PasswordCheckOutline.inheritAttrs = false;
export default PasswordCheckOutline;