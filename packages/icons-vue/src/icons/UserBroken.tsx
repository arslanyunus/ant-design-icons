// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserBrokenSvg from '@ant-design/icons-svg/lib/asn/UserBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserBroken: UserBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserBrokenSvg}></AntdIcon>;
};

UserBroken.displayName = 'UserBroken';
UserBroken.inheritAttrs = false;
export default UserBroken;