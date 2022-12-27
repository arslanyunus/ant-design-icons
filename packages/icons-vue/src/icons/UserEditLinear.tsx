// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserEditLinearSvg from '@ant-design/icons-svg/lib/asn/UserEditLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserEditLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserEditLinear: UserEditLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserEditLinearSvg}></AntdIcon>;
};

UserEditLinear.displayName = 'UserEditLinear';
UserEditLinear.inheritAttrs = false;
export default UserEditLinear;