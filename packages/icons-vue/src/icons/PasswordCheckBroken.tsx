// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PasswordCheckBrokenSvg from '@ant-design/icons-svg/lib/asn/PasswordCheckBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PasswordCheckBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PasswordCheckBroken: PasswordCheckBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PasswordCheckBrokenSvg}></AntdIcon>;
};

PasswordCheckBroken.displayName = 'PasswordCheckBroken';
PasswordCheckBroken.inheritAttrs = false;
export default PasswordCheckBroken;