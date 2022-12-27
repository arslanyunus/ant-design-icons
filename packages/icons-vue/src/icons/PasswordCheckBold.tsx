// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PasswordCheckBoldSvg from '@ant-design/icons-svg/lib/asn/PasswordCheckBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PasswordCheckBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PasswordCheckBold: PasswordCheckBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PasswordCheckBoldSvg}></AntdIcon>;
};

PasswordCheckBold.displayName = 'PasswordCheckBold';
PasswordCheckBold.inheritAttrs = false;
export default PasswordCheckBold;