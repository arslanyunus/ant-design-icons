// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserCirlceAddLinearSvg from '@ant-design/icons-svg/lib/asn/UserCirlceAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserCirlceAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserCirlceAddLinear: UserCirlceAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserCirlceAddLinearSvg}></AntdIcon>;
};

UserCirlceAddLinear.displayName = 'UserCirlceAddLinear';
UserCirlceAddLinear.inheritAttrs = false;
export default UserCirlceAddLinear;