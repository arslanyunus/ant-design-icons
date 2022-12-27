// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserEditBrokenSvg from '@ant-design/icons-svg/lib/asn/UserEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserEditBroken: UserEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserEditBrokenSvg}></AntdIcon>;
};

UserEditBroken.displayName = 'UserEditBroken';
UserEditBroken.inheritAttrs = false;
export default UserEditBroken;