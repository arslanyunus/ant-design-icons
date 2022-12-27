// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserCirlceAddBrokenSvg from '@ant-design/icons-svg/lib/asn/UserCirlceAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserCirlceAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserCirlceAddBroken: UserCirlceAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserCirlceAddBrokenSvg}></AntdIcon>;
};

UserCirlceAddBroken.displayName = 'UserCirlceAddBroken';
UserCirlceAddBroken.inheritAttrs = false;
export default UserCirlceAddBroken;