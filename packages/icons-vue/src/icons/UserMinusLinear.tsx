// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserMinusLinearSvg from '@ant-design/icons-svg/lib/asn/UserMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserMinusLinear: UserMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserMinusLinearSvg}></AntdIcon>;
};

UserMinusLinear.displayName = 'UserMinusLinear';
UserMinusLinear.inheritAttrs = false;
export default UserMinusLinear;