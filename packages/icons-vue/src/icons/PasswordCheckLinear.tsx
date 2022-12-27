// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PasswordCheckLinearSvg from '@ant-design/icons-svg/lib/asn/PasswordCheckLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PasswordCheckLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PasswordCheckLinear: PasswordCheckLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PasswordCheckLinearSvg}></AntdIcon>;
};

PasswordCheckLinear.displayName = 'PasswordCheckLinear';
PasswordCheckLinear.inheritAttrs = false;
export default PasswordCheckLinear;